function loadFriends() {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayFriends(data))
}

function displayFriends(friends) {
    // console.log(friends);
    const moreFriends = friends.results;

    const friendDiv = document.getElementById('friends');
    for (const friend of moreFriends) {
        console.log(friend);
        const divCreate = document.createElement('div');

        divCreate.classList.add('friend')

        divCreate.innerHTML = `
            <img src="${friend.picture.large}" alt="">
            <h2><span>Name:</span> ${friend.name.title} ${friend.name.first} ${friend.name.last}</h2>
            <h3><span>Email:</span> ${friend.email}</h3>
            <h4><span>Gender:</span> ${friend.gender}</h4>
        `
        friendDiv.appendChild(divCreate);
    }
}