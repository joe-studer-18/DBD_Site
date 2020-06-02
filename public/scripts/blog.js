var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    loadBlogs(this);
  }
};

xhttp.open("GET", "views/blogs/blogs_metadata.xml", true);
xhttp.send();

function loadBlogs(xml) {
  var xmlDoc = xml.responseXML;
  var dst = document.getElementById("blogIndex");
  fullBlog = document.createElement("a");
  fullBlog.href = "views/blogs/" + 
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue +
    ".html";

  blogTitle = document.createElement("h1");
  blogTitle.innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue +
    " (" + 
    xmlDoc.getElementsByTagName("date")[0].childNodes[0].nodeValue + 
    ")";
  blogSummary = document.createElement("div");
  blogSummary.appendChild(blogTitle);
  blogSummary.classList.add("blog-item");
  fullBlog.appendChild(blogSummary);
  dst.appendChild(fullBlog);
}
