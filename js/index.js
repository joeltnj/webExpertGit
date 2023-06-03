


xhr=new XMLHttpRequest()
xhr.open("get","#")
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const rep = JSON.parse(xhr.responseText);
    }}
xhr.send()