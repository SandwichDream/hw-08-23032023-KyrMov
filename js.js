window.onload = ()=>{

    // 1) Створіть 10 тегів А в яких заданий class="menu-item", target, href зі занченнями index1.html, index2.html і т.д

    let divHlinks = document.querySelector("div.hyperlinks");

    for(let i = 1; i <= 10; i++){

        // let a = document.createElement('a');
        // a.className = "menu-item";
        // a.href = `index${i}.html`;
        // a.target = `index${i}.html`;
        // divHlinks.appendChild(a);

        divHlinks.innerHTML += `<a class="menu-item" href="index${i}.html" target="index${i}.html">${i}</a>`;

    }

    // 2) Задайте створеним елементам за допомогою js правило display:inline-block, падінг 20рх а також змініть колір на червоний

    for (let i = 1; i <= 10; i++) {
        let a = document.querySelector(`a[target="index${i}.html"]`);
        // a.setAttribute("class", "my-a");
        a.setAttribute("style", "display:inline-block;color:red;padding:20px;");
    }

    // 3)Задайте 3 елементу в списку додатковий класс active

    let a = document.querySelector(`a[target="index3.html"]`);
    a.classList.add("active");

    // 4) Створіть в html форму з інпутами в яких є атрибут дісейблед, за допомогою Js виберіть всі інпути на сторінці і видаліть в них атрибут disabled та задайте бекграунд зеленого кольору, а колір шрифта зробіть білим

    let inp = document.querySelectorAll("input");
    for(let i = 0; i < inp.length; i++){
        inp[i].removeAttribute("disabled");
        // inp[i].style.color = "white";
        // inp[i].style.backgroundColor = "darkolivegreen";
        inp[i].className = "my-inp";
    }

    // Додаткова робота
    // 5) За допомогою js створіть фрагмент з розміткою і виведіть в нього інформацію з массива, для вивода інформації можете використати  готові класи підключивши bootstrap

    let ul = document.createElement("ul");
    let arr = ["Name","Lastname","Age","Skills","Goals","Success"]
    document.body.appendChild(ul);
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement("li");
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }

}