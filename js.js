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
    let arr = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618"
            }
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
          }
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653"
            }
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
          }
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990"
            }
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
          }
        }
      ]


    document.body.appendChild(ul);
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement("li");
        li.className = "my-li";
        li.innerHTML = `id: ${arr[i].id}; <span class="text-success">Name: ${arr[i].name}</span> - 
        <span class="text-primary">${arr[i].username}</span> || Email: <span class="text-warning">${arr[i].email}</span> || 
        City: ${arr[i].address.city}`;
        ul.appendChild(li);

    }

}