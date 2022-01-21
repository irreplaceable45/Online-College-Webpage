var btn=document.querySelector("#search");
var inputday=document.querySelector("#day");
var inputtime=document.querySelector("#time");
var routine= document.querySelector("#routine");

function setHovercolor(){
    btn.style.background="#DC143C";
}
function setNormalcolor(){
    btn.style.background="";
}
btn.addEventListener("mouseover",setHovercolor);
btn.addEventListener("mouseout",setNormalcolor);
btn.addEventListener("click",printclasswithlink);

function printclasswithlink()
{
    if(inputday.value=="Mon")
    {
        if(inputtime.value==9)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2113(Quantum) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==10)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2123(system) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/95518376923?pwd=d1hheXdZVUhZLzVqQk5pUVhQdUlNZz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==11)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2113(inorganic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/97733965261?pwd=REo4ZzhqWENEUE9IYlhoZVB2L0YxQT09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==3)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join MT2113(prob) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/99650844805?pwd=a0JjZ1c5RGdTY2NCUHJkUExJUll3UT09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==4)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2223(Organic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else
        {   
             
            alert("Break hai bro");
        }
        
    }
    if(inputday.value=="Tue")
    {
        if(inputtime.value==9)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2123(System) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/95518376923?pwd=d1hheXdZVUhZLzVqQk5pUVhQdUlNZz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==10)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2113(Quantum) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==2)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2113(EcoEvo) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/98359676635?pwd=RXVUcytXVmUxUjNDMWxQVXBHby9hdz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==3)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join MT2113(prob) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/99650844805?pwd=a0JjZ1c5RGdTY2NCUHJkUExJUll3UT09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==4)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2223(Organic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else
        {   
             
            alert("Break hai bro");
        }
    }
    if(inputday.value=="Wed")
    {
        if(inputtime.value==9)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2123(system) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/95518376923?pwd=d1hheXdZVUhZLzVqQk5pUVhQdUlNZz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==10)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2123(Math-phy(Audit)) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==11)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2113(inorganic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/97733965261?pwd=REo4ZzhqWENEUE9IYlhoZVB2L0YxQT09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==2)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2113(EcoEvo) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/98359676635?pwd=RXVUcytXVmUxUjNDMWxQVXBHby9hdz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==3)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join EC2113(Climate) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else
        {   
             
            alert("Break hai bro");
        }
    }
    if(inputday.value=="Thu")
    {
        if(inputtime.value==9)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2123(Math-phy(Audit)) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==10)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2113(Quantum) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==3)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join EC2113(climate) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==4)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join BL2113(EcoEvo) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/98368534882?pwd=WFYwSjNaYVJwZzJ4cG5ncVBKNmJmdz09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else
        {   
             
            alert("Break hai bro");
        }
    }
    if(inputday.value=="Fri")
    {
        if(inputtime.value==9)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join PH2123(Math-phy(Audit)) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==10)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2223(Organic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==11)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join CH2113(inorganic) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="https://zoom.us/j/97733965261?pwd=REo4ZzhqWENEUE9IYlhoZVB2L0YxQT09";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==12)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join MT2113(TUT(PROB)) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==3)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join EC2113(Climate) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else if(inputtime.value==4)
        {   
             
            var paraText=document.createElement("p");
            var paraNode=document.createTextNode("Join MT2113(TUT(PROB)) by using the given link");
            paraText.appendChild(paraNode);
            routine.appendChild(paraText);
            //create anchor element.
            var a= document.createElement('a');
            //create the text node node for anchor element.
            var link=document.createTextNode("Link to attend the class");
            //Append the text node to another element.
            a.appendChild(link);
            //set the tittle
            a.tittle="This is Link";
            //set the href
            a.href ="#";
            //set the target
            a.target="blank";
            //Append the anchor element to the body.
            routine.appendChild(a);
        }
        else
        {   
          alert("Break hai bro");
        }
    }
}