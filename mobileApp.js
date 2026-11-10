//JavaScript file
//Mobile App Dev
//Rebecca Omdahl

$(document).ready(function() {
    console.log("Cinder & Sage Home Page Loaded");
});
function savePreferences()
{
    localStorage.setItem(
        "name",
        document.getElementById("name").value
    );

    localStorage.setItem(
        "email",
        document.getElementById("email").value
    );

    localStorage.setItem(
        "experience",
        document.getElementById("experience").value
    );

    localStorage.setItem(
        "ideas",
        document.getElementById("ideas").value
    );

    alert("Your preferences have been saved!");
}
window.onload = function()
{
    if(localStorage.getItem("name"))
    {
        document.getElementById("name").value =
            localStorage.getItem("name");

        document.getElementById("email").value =
            localStorage.getItem("email");

        document.getElementById("experience").value =
            localStorage.getItem("experience");

        document.getElementById("ideas").value =
            localStorage.getItem("ideas");
    }
};

function addFavorite()
{
    let favorite =
        document.getElementById("favoriteItem").value;

    if(favorite === "")
    {
        alert("Please enter a favorite item.");
        return;
    }

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(favorite);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

    document.getElementById("favoriteItem").value = "";
}

function displayFavorites()
{
    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    let list =
        document.getElementById("favoritesList");

    if(!list)
    {
        return;
    }

    list.innerHTML = "";

    favorites.forEach(function(item)
    {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

$(document).ready(function()
{
    displayFavorites();
});
