const handleAddToStorage = () =>{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem(email,name)

}