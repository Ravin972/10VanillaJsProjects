const reviews = [
    {
      id: 1,
      name: "John Doe",
      job: "Web Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod augue at dolor mollis bibendum. Fusce vestibulum rutrum justo, quis ultrices mi tristique eu."
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "Graphic Designer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Duis posuere neque et dolor commodo, ac commodo nulla vehicula. Nam aliquet orci elit, vel accumsan enim suscipit at. Maecenas viverra, nisl eu tristique hendrerit, libero leo ultrices mi, sed maximus lacus purus eu justo."
    },
    {
      id: 3,
      name: "Bob Johnson",
      job: "Accountant",
      img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      text: "Etiam varius, lacus nec congue varius, justo ex ultricies nunc, at rutrum lacus nulla vel sapien. Donec dictum luctus ipsum a congue. Curabitur volutpat, sapien at venenatis convallis, dolor risus volutpat ipsum, a sagittis lacus mauris a nibh."
    },
    {
      id: 4,
      name: "Samantha Lee",
      job: "Marketing Manager",
      img: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Nullam dictum nunc at turpis bibendum ultrices. Nullam vulputate euismod nibh, id convallis enim interdum vel. Fusce ac imperdiet urna. Sed id urna eget arcu vulputate pellentesque."
    }
  ];
  

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });