const qtdMsg = document.querySelector(".qtd-msg");
const lista = document.querySelector("ul");
const button = document.querySelector("button");
let count = 0;

let notifications = [{
    reactPost: [{
        imgProfile: "/assets/images/avatar-mark-webber.webp",
        name: "Mark Webber",
        namePost: "My first tournament today!",
        tempo: "1m ago",
        message: "reacted to your recent post",
        status: "No read",
    },
    {
        imgProfile: "/assets/images/avatar-nathan-peterson.webp",
        name: "Nathan Peterson",
        namePost: "5 end-game strategies to increase your win rate",
        tempo: "2 weeks ago",
        message: "reacted to your recent post",
        status: "read",
    }]
},
{
    follow: [{
        imgProfile: "/assets/images/avatar-angela-gray.webp",
        name: "Angela Gray",
        tempo: "1m ago",
        message: "followed you",
        status: "No read",
    }]
},
{
    group: [{
        imgProfile: "/assets/images/avatar-jacob-thompson.webp",
        name: "Jacob Thompson",
        tempo: "1day ago",
        type: "join",
        message: "has joined your group",
        nameGroup: "Chess Club",
        status: "No read",
    },
    {
        imgProfile: "/assets/images/avatar-anna-kim.webp",
        name: "Anna Kim",
        tempo: "2 weeks ago",
        type: "left",
        message: "left the group",
        nameGroup: "Chess Club",
        status: "read",
    }]
},
{
    comment: [{
        imgProfile: "/assets/images/avatar-kimberly-smith.webp",
        imgPost: "/assets/images/image-chess.webp",
        name: "Kimberly Smith",
        tempo: "1 week ago",
        message: "commented on your picture",
        status: "read",
    }]
},
{
    privateMessage: [{
        imgProfile: "/assets/images/avatar-rizky-hasanuddin.webp",
        name: "Rizky Hasanuddin",
        tempo: "5 days ago",
        privateMsg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        message: "sent you a private message",
        status: "read",
    }]
}
];

button.addEventListener("click", () => {
    notifications[0].reactPost.forEach((notificacao) => {
        if (notificacao.status === "No read") {
            notificacao.status = "read";
        };
    });

    notifications[1].follow.forEach((notificacao) => {
        if (notificacao.status === "No read") {
            notificacao.status = "read";
        };
    });

    notifications[2].group.forEach((notificacao) => {
        if (notificacao.status === "No read") {
            notificacao.status = "read";
        };
    });

    notifications[3].comment.forEach((notificacao) => {
        if (notificacao.status === "No read") {
            notificacao.status = "read";
        };
    });

    notifications[4].privateMessage.forEach((notificacao) => {
        if (notificacao.status === "No read") {
            notificacao.status = "read";
        };
    });
    lista.innerHTML = "";
    count = 0;
    renderNotifications()
})

function renderNotifications() {
    notifications[0].reactPost.forEach((notificacao) => {
        if (notificacao.status === "No read") count += 1;
        lista.innerHTML += renderReactPost(notificacao);
    });

    notifications[1].follow.forEach((notificacao) => {
        if (notificacao.status === "No read") count += 1;
        lista.innerHTML += renderFollow(notificacao);
    });

    notifications[2].group.forEach((notificacao) => {
        if (notificacao.status === "No read") count += 1;
        lista.innerHTML += renderGroup(notificacao);
    });

    notifications[3].comment.forEach((notificacao) => {
        if (notificacao.status === "No read") count += 1;
        lista.innerHTML += renderComment(notificacao);
    });

    notifications[4].privateMessage.forEach((notificacao) => {
        if (notificacao.status === "No read") count += 1;
        lista.innerHTML += renderPrivateMessage(notificacao);
    });

    qtdMsg.innerText = count;
}

function renderReactPost(param) {
    if (param.status === "No read") {
        return `
            <li class = "no-read">
                <img src = ${param.imgProfile}>
                <div class = "container-msg-notification">
                    <p class = "bolinha"><span class = "name hover">${param.name}</span> ${param.message} <span class = "name-post hover">${param.namePost}</span></p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    } else {
        return `
            <li class = "read">
                <img src = ${param.imgProfile}>
                <div class = "container-msg-notification">
                    <p><span class="name hover">${param.name}</span> ${param.message} <span class = "name-post hover">${param.namePost}</span></p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    }
}

function renderFollow(param) {
    if (param.status === "No read") {
        return `
            <li class = "no-read">
                <img src = ${param.imgProfile}>
                <div class = "constainer-msg-notification">
                    <p class = "bolinha"><span class="name hover">${param.name}</span> ${param.message}</p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    } else {
        return `
            <li class = "read">
                <img src = ${param.imgProfile}>
                <div class = "constainer-msh-notification">
                    <p><span class="name hover">${param.name}</span> ${param.message}</p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    }
}

function renderGroup(param) {
    if (param.status === "No read") {
        return `
            <li class = "no-read">
                <img src = ${param.imgProfile}>
                <div class = "container-msg-notification">
                    <p class = "bolinha"><span class="name hover">${param.name}</span> ${param.message} <span class = "name-group hover">${param.nameGroup}</span></p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    } else {
        return `
            <li class = "read">
                <img src = "${param.imgProfile}">
                <div class = "container-msg-notification">
                    <p><span class="name hover">${param.name}</span> ${param.message} <span class = "name-group hover">${param.nameGroup}</span></p>
                    <span class = "time">${param.tempo}</span>
                </div>
            </li>
        `;
    }
}

function renderComment(param) {
    if (param.status === "No read") {
        return `
            <li class = "no-read container-comment">
                <div>
                    <img src = ${param.imgProfile}>
                    <div class = "container-msg-notification">
                        <p class = "bolinha"><span class="name hover">${param.name}</span> ${param.message}</p>
                        <span class = "time">${param.tempo}</span>
                    </div>
                </div>
                <img src="${param.imgPost}">
            </li>
        `;
    } else {
        return `
            <li class = "read container-comment">
                <div class = "comment">
                    <img src = ${param.imgProfile}>
                    <div class = "container-msg-notification">
                        <p><span class="name hover">${param.name}</span> ${param.message}</p>
                        <span class = "time">${param.tempo}</span>
                    </div>
                </div>
                <img src="${param.imgPost}">
            </li>
        `;
    }
}

function renderPrivateMessage(param) {
    if (param.status === "No read") {
        return `
            <li class = "no-read">
                <img src = ${param.imgProfile}>
                <div class = "container-msg-notification">
                    <p><span class="name hover">${param.name}</span> ${param.message}</p>
                    <span class = "time">${param.tempo}</span>
                    <p>${param.message}</p>
                </div>
            </li>
        `;
    } else {
        return `
            <li class = "read">
                <img src = ${param.imgProfile}>
                <div class = "container-msg-notification">
                    <p><span class="name hover">${param.name}</span> ${param.message}</p>
                    <span class = "time">${param.tempo}</span>
                    <p class = "message-private">${param.privateMsg}</p>
                </div>
            </li>
        `;
    }
}

renderNotifications()