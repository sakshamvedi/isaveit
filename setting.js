let urls = [""]
let vals  = [""]
let textel = document.getElementById("textbox")
//urls.push(textel.value)
let texts = document.getElementById("lorem")
let subject = document.getElementById("Subject")

let text = JSON.parse(localStorage.getItem("mytext"))
let url = JSON.parse(localStorage.getItem("myurl"))

if(text)
{
    if(url)
    {
        urls = url
        vals = text
    }
   
}

function add()
{
    urls.push(textel.value)
    vals.push(subject.value)
    localStorage.setItem("mytext",JSON.stringify(vals))
    localStorage.setItem("myurl",JSON.stringify(urls))
  show()
  textel.value = ""
  vals.value = ""
}

function deleted()
{
    localStorage.clear()
    window.location.reload()
}


function show()
{let list = ""
for (let index = 0; index < urls.length; index++) {
   list += `
   <li>
 <a target = '_blank' href = '${urls[index]}'>
 ${vals[index]}
 <a>
    </li>
   `
   texts.innerHTML = list
   //console.log("urls[index]")
}
}
