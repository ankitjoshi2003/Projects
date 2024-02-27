const sizes={"Small":10,"Medium":15,"Large":20};
const field=document.querySelector(".field");
const heights=[];
const arr= [];



const randNum=(num)=>{
   const arr=new Array();
   for(let i=0;i<num;i++)
   {
         const hei=Math.floor(Math.random()*400+10);
         heights.push(hei);
         const div=document.createElement("div");
         div.classList.add("block");
         div.style.height=hei+"px";
         arr.push(div);
   }
   return arr;
}

const init=()=>{
    field.innerHTML="";
    arr.splice(0,arr.length);
    heights.splice(0,heights.length);
    const size=sizes[document.querySelector("#Size").value];
    arr.push(...randNum(size));
    for(let i=0;i<size;i++)
    {
        field.appendChild(arr[i]);
    }
    console.log(heights);
}


const animate=(swaps)=>{
   
     if(swaps.length==0){return;};
     const indices=swaps.shift();
     let temp=arr[indices[0]].style.height;
     arr[indices[0]].style.height=arr[indices[1]].style.height;
     arr[indices[1]].style.height=temp;
     arr[indices[0]].style.backgroundColor="red";
     arr[indices[1]].style.backgroundColor="red";
     setTimeout(()=>{
        arr[indices[0]].style.backgroundColor="black";
        arr[indices[1]].style.backgroundColor="black";
     },200);
     setTimeout(()=>animate(swaps),500);
}



const SelectionSort=()=> { 
    let n = heights.length;
    const swaps=[];
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(heights[j] < heights[min]) {
                min=j; 
            }
         }
         if (min != i) {
             swaps.push([i,min]);
             let tmp =heights[i]; 
             heights[i] = heights[min];
             heights[min] = tmp;      
        }
    }
   
    return swaps;
}

const Insertion=()=> {
    const swaps=[];
    for (let i = 1; i < heights.length; i++) {
      let currentValue = heights[i]
      let j
      for (j = i - 1; j >= 0 && heights[j] > currentValue; j--) {
        heights[j + 1] = heights[j]
        swaps.push([j+1,j]);
      }
      heights[j + 1] = currentValue
    }
    console.log(swaps);
    return swaps
  }

const Bubble=()=>{
     const swaps=[];
     do{
        
        var swapped=false;
        for(let i=1;i<heights.length;i++)
        {
            if(heights[i-1]>heights[i])
            {
                swapped=true;
                swaps.push([i-1,i]);
                [heights[i-1],heights[i]]=[heights[i],heights[i-1]];
            }
        }
     }while(swapped);
     return swaps;
}


const play=()=>{
    const swaps=[];
    const algo=document.querySelector("#Algorithm").value;
    if(algo==="Bubble"){swaps.push(...Bubble());}
    else if(algo==="Insertion"){swaps.push(...Insertion());}
    else {swaps.push(...SelectionSort());}
    animate(swaps);
}



init();