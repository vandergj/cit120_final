// global variables
const pages = [
    {
        page: 'Grade View',
        navigate: view
    },
    {
        page: 'Grade Add',
        navigate: add
    }
]

const creds = ['cool', 'password']

let grades = {}

// nav functions
function navButton(text, parent, page){
    let button = document.createElement('button')
    button.innerHTML = text
    button.style.position='relative'
    button.style.top='25%'
    button.style.left="45%"
    button.addEventListener('click',function(){
        document.querySelector('.wrapper').innerHTML = ''
        page()
    })
    parent.appendChild(button)
}

function navbar(){
    document.body.innerHTML = ''
    let nav = document.createElement('nav')
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    nav.style.backgroundColor = 'blue'
    nav.style.height = '60px'
    document.body.appendChild(nav)
    document.body.appendChild(wrapper)
    for (obj of pages){
        navButton(obj.page, nav, obj.navigate)
    }
    view()
}

// page functions
function view(){
    document.querySelector('.wrapper').innerHTML = ''
    let view = document.createElement('p')
    let output = ''
    for (let i = 0; i < Object.keys(grades).length; i ++){
        output += `<br>Student Name: ${Object.keys(grades)[i]} | Grade: ${grades[Object.keys(grades)[i]]}`
    }
    view.innerHTML = `Grades${output}`
    document.querySelector('.wrapper').appendChild(view)
}

function add(){
    let add = document.createElement('p')
    add.innerHTML = "Add Grades"
    let name_input = document.createElement('input')
    let grade_input = document.createElement('input')
    name_input.placeholder = 'Student Name'
    grade_input.placeholder = 'Grade (0-100)'
    let submit_button = document.createElement('button')
    submit_button.innerHTML = 'Submit Grade'
    submit_button.addEventListener('click',function(){
        let error_msg = document.createElement('p')
        let output = ''
        if (typeof name_input.value === 'string'){
            if(isNaN(grade_input.value)){
                output = 'Grade is not a number'
            }else{
                submitGrade(name_input.value,grade_input.value)
            }
        }else{
            output = 'Name is not a string'
        }
        if(output !== ''){
            error_msg.innerHTML = output
            document.querySelector('.wrapper').appendChild(error_msg)

        }
    })
    document.querySelector('.wrapper').appendChild(add)
    document.querySelector('.wrapper').appendChild(name_input)
    document.querySelector('.wrapper').appendChild(grade_input)
    document.querySelector('.wrapper').appendChild(submit_button)
}

function submitGrade(student,grade){
    grades[student] = grade
    view()
}

// main login code
let userinput = document.createElement('input')
userinput.placeholder = 'Username'
let passinput = document.createElement('input')
passinput.placeholder = 'Password'
passinput.setAttribute('type', 'password')
document.body.appendChild(userinput)
document.body.appendChild(passinput)

let message = document.createElement('h4')
document.body.appendChild(message)

let submitbutton = document.createElement('button')
submitbutton.innerHTML = 'Login'
submitbutton.style.display = 'block'
submitbutton.style.position = 'relative'
submitbutton.style.top = '2px'
document.body.appendChild(submitbutton)
submitbutton.addEventListener('click', function(){
    if(userinput.value !== creds[0]){
        message.innerHTML = 'Wrong username'

    }else if(passinput.value !== creds[1]){
        message.innerHTML = 'Wrong password'
    }else{
        navbar()
    }

})