function setEditData(id, title) {
    document.getElementById("editInput").value = title;
    document.getElementById("editForm").action = "/update/" + id;
}
