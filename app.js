let addMoreCertificates = () => {
    
    //getting form element
    let form = document.querySelector("form");
    let hr = document.createElement("hr");
    hr.style.color = "#d4e5ef"
    hr.style.boxShadow = "0px 3px 6px gray"
    form.append(hr);
    //creating a div for name of institute
    let div1 = document.createElement("div");
    div1.setAttribute("class", "col-md-6")

    //creating a label
    let label1 = document.createElement("label");
    label1.setAttribute("for", "institute");
    label1.setAttribute("class", "form-label");
    label1.innerText = "Name of Institute";
    div1.append(label1);

    //creating input field
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control");
    input1.setAttribute("id", "institute");
    div1.append(input1);

    form.append(div1);



    //creating a div for years of study
    let div2 = document.createElement("div");
    div2.setAttribute("class", "col-md-3");



    //creating a label
    let label2 = document.createElement("label");
    label2.setAttribute("for", "from-year");
    label2.setAttribute("class", "form-label");
    label2.innerText = "Years of Study";
    div2.append(label2);




    //creating input field
    let input2 = document.createElement("input");
    input2.setAttribute("type", "month");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", "from-year");
    input2.setAttribute("palceholder", "from");
    div2.append(input2);


    form.append(div2);




    //creating a div for "to year"
    let div3 = document.createElement("div");
    div3.setAttribute("class", "col-md-3");



    //creating a label
    let label3 = document.createElement("label");
    label3.setAttribute("for", "to-year");
    label3.setAttribute("class", "form-label");
    label3.innerText = "...";
    label3.style.color = "white";
    div3.append(label3);




    //creating input field
    let input3 = document.createElement("input");
    input3.setAttribute("type", "month");
    input3.setAttribute("class", "form-control");
    input3.setAttribute("id", "to-year");
    input3.setAttribute("palceholder", "To");
    div3.append(input3);


    form.append(div3);





    //creating a div for degree/certificate
    let div4 = document.createElement("div");
    div4.setAttribute("class", "col-12");



    //creating a label
    let label4 = document.createElement("label");
    label4.setAttribute("for", "degree");
    label4.setAttribute("class", "form-label");
    label4.innerText = "Degree/Certificate";
    div4.append(label4);




    //creating input field
    let input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "form-control");
    input4.setAttribute("id", "degree");
    input4.setAttribute("placeholder", "Degree");
    div4.append(input4);


    form.append(div4);




}

/////////////////////////////////////////////////////////////////


let addMoreExperiences = () =>{

//getting form element
let form = document.querySelector("form");
let hr = document.createElement("hr");
hr.style.color = "#d4e5ef"
hr.style.boxShadow = "0px 3px 6px gray"
form.append(hr);
//creating a div for name of institute
let div1 = document.createElement("div");
div1.setAttribute("class", "col-md-6")

//creating a label
let label1 = document.createElement("label");
label1.setAttribute("for", "organization");
label1.setAttribute("class", "form-label");
label1.innerText = "Name of Organization/Company";
div1.append(label1);

//creating input field
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("class", "form-control");
input1.setAttribute("id", "organization");
div1.append(input1);

form.append(div1);



//creating a div for years of study
let div2 = document.createElement("div");
div2.setAttribute("class", "col-md-3");



//creating a label
let label2 = document.createElement("label");
label2.setAttribute("for", "from-year");
label2.setAttribute("class", "form-label");
label2.innerText = "Employment Tenure";
div2.append(label2);




//creating input field
let input2 = document.createElement("input");
input2.setAttribute("type", "month");
input2.setAttribute("class", "form-control");
input2.setAttribute("id", "from-year");
input2.setAttribute("palceholder", "from");
div2.append(input2);


form.append(div2);




//creating a div for "to year"
let div3 = document.createElement("div");
div3.setAttribute("class", "col-md-3");



//creating a label
let label3 = document.createElement("label");
label3.setAttribute("for", "to-year");
label3.setAttribute("class", "form-label");
label3.innerText = "...";
label3.style.color = "white";
div3.append(label3);




//creating input field
let input3 = document.createElement("input");
input3.setAttribute("type", "month");
input3.setAttribute("class", "form-control");
input3.setAttribute("id", "to-year");
input3.setAttribute("palceholder", "To");
div3.append(input3);


form.append(div3);





//creating a div for degree/certificate
let div4 = document.createElement("div");
div4.setAttribute("class", "col-12");



//creating a label
let label4 = document.createElement("label");
label4.setAttribute("for", "designation");
label4.setAttribute("class", "form-label");
label4.innerText = "Designation";
div4.append(label4);




//creating input field
let input4 = document.createElement("input");
input4.setAttribute("type", "text");
input4.setAttribute("class", "form-control");
input4.setAttribute("id", "designation");
input4.setAttribute("placeholder", "Designation/Role");
div4.append(input4);


form.append(div4);


}



/*///////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS
*/


let addMoreProjects = () =>{

    //getting form element
let form = document.querySelector("form");
let hr = document.createElement("hr");
hr.style.color = "#d4e5ef"
hr.style.boxShadow = "0px 3px 6px gray"
form.append(hr);
//creating a div for name of institute
let div1 = document.createElement("div");
div1.setAttribute("class", "col-md-6")

//creating a label
let label1 = document.createElement("label");
label1.setAttribute("for", "title");
label1.setAttribute("class", "form-label");
label1.innerText = "Title";
div1.append(label1);

//creating input field
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("class", "form-control");
input1.setAttribute("id", "title");
div1.append(input1);

form.append(div1);



//creating a div for years of study
let div2 = document.createElement("div");
div2.setAttribute("class", "col-md-3");



//creating a label
let label2 = document.createElement("label");
label2.setAttribute("for", "from-year");
label2.setAttribute("class", "form-label");
label2.innerText = "Project Duration";
div2.append(label2);




//creating input field
let input2 = document.createElement("input");
input2.setAttribute("type", "month");
input2.setAttribute("class", "form-control");
input2.setAttribute("id", "from-year");
input2.setAttribute("palceholder", "from");
div2.append(input2);


form.append(div2);




//creating a div for "to year"
let div3 = document.createElement("div");
div3.setAttribute("class", "col-md-3");



//creating a label
let label3 = document.createElement("label");
label3.setAttribute("for", "to-year");
label3.setAttribute("class", "form-label");
label3.innerText = "...";
label3.style.color = "white";
div3.append(label3);




//creating input field
let input3 = document.createElement("input");
input3.setAttribute("type", "month");
input3.setAttribute("class", "form-control");
input3.setAttribute("id", "to-year");
input3.setAttribute("palceholder", "To");
div3.append(input3);


form.append(div3);





//creating a div for degree/certificate
let div4 = document.createElement("div");
div4.setAttribute("class", "col-12");



//creating a label
let label4 = document.createElement("label");
label4.setAttribute("for", "description");
label4.setAttribute("class", "form-label");
label4.innerText = "Description";
div4.append(label4);




//creating input field
let input4 = document.createElement("textarea");
input4.setAttribute("type", "text");
input4.setAttribute("class", "form-control");
input4.setAttribute("id", "description");
input4.setAttribute("rows", "6");
input4.setAttribute("placeholder", "Describe your project briefly");
div4.append(input4);


form.append(div4);



}


//////////////////////////////////////////////////

let addSkills = () => {
    // let technicalSkills = document.querySelector("#technical");
   let skills = document.querySelector("#skills");
   let button = document.createElement("button");
   button.setAttribute("class", "btn btn-primary");
   button.setAttribute("id", "badge");
   button.innerText = skills.value;
   let span = document.createElement("span");
   span.setAttribute("class", "badge badge-light");
   span.setAttribute("id", "cross");
   span.innerText = "X";
   button.append(span);

   technicalSkills.append(button);


}




//////////////////////////////////////////////////////
///////////////////// for tags ///////////////////////

const ul = document.querySelector("ul"),
inputs = document.querySelectorAll("input"),
tagNumb = document.querySelectorAll(".details span");

let maxTags = 10,
tags = [[],[]];

// countTags();
// createTag();

function countTags(index){
    // console.log(inputs[0].focus());
    if(tagNumb && inputs[index]){
        
        inputs[index].focus();
        tagNumb[index].innerText = maxTags  - tags[index].length ;
    }
}

function createTag(e){
    // console.log(e.target.getAttribute("index"));
    
    
    if(e){

        const parent = e.target.parentElement;
        const index = e.target.getAttribute("index");
        // console.log(e.target.parentElement);

        parent.querySelectorAll("li").forEach(li => li.remove());
        console.log(tags);
        tags[index].slice().reverse().forEach(tag =>{
            let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}', index)"></i></li>`;
            parent.insertAdjacentHTML("afterbegin", liTag);
        });
        countTags(index);
        // console.log(e.target.getAttribute('index'));
    }
}

function remove(element, tag, count){
    let index  = tags[count].indexOf(tag);
    tags[count] = [...tags[count].slice(0, index), ...tags[count].slice(index + 1)];
    element.parentElement.remove();
    countTags(index);
}

function addTag(e){
    if(e.key == "Enter"){
        const index = e.target.getAttribute("index");

        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags[index].includes(tag)){
            if(tags[index].length < 10){
                tag.split(',').forEach(tag => {
                    tags[index].push(tag);
                    createTag(e);
                });
            }
        }
        e.target.value = "";
    }
}

inputs.forEach((input) => {input.addEventListener("keyup", addTag)});

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTags();
});