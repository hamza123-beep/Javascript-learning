// This is Part 2 - Connect to API

async function loadData() {
  try {
    // Fetch from free API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    // Show stats
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalPosts').textContent = "100";

    // Show users in DOM
    const userList = document.getElementById('userList');
    userList.innerHTML = ""; // clear loading

    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-card';
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <small>${user.company.name}</small>
      `;
      userList.appendChild(div);
    });

    // Add search filter (Practice Challenge)
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
      const value = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll('.user-card');
      cards.forEach(card => {
        const name = card.textContent.toLowerCase();
        card.style.display = name.includes(value) ? 'block' : 'none';
      });
    });

  } catch (error) {
    console.log("API Error", error);
  }
}

loadData();