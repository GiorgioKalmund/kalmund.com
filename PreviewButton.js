const template = document.createElement("template")
template.innerHTML= `
    <link rel="stylesheet" href="./styles.css"></link>
    
    <div id="top-name" class="person-name"><h1></h1></div>
    <div class="container">
	<a href="https://example.com" target="_blank" class="image-button">
	    <img src="example.jpg" alt="Image" class="image-button-image">
	</a>
    </div>
    <div id="bottom-name" class="person-name"><h1></h1></div>
`;

class PreviewButton extends HTMLElement {
    
    constructor(){
	super();
	const shadow = this.attachShadow({ mode: 'open' });
	
	shadow.append(template.content.cloneNode(true))
    }

    connectedCallback(){
	/* Get URL for button to link to */
	let url; 
	if (this.hasAttribute("url")){
	    url = this.getAttribute("url")
	    console.log("URL: " + url)
	}

	if (this.hasAttribute("name")){
	    name = this.getAttribute("name")
	    console.log("name: " + name)
	}
    
	if (name != "Nina Kalmund" && window.screen.width > 800){
	    this.shadowRoot.querySelector("#bottom-name h1").innerHTML = name;
	    console.log("width: " + window.screen.width)
	} else {
	    this.shadowRoot.querySelector("#top-name h1").innerHTML = name;
	}

	

	/* Get name of local image file*/
	let image_name;
	if (this.hasAttribute("image")){
	    image_name = this.getAttribute("image")
	    console.log("image: " + url)
	}

	const button = this.shadowRoot.querySelector('.image-button');
	if (button){
	    button.href = url;
	}
	const imageElement = this.shadowRoot.querySelector('.image-button-image');
	if (imageElement){
	    imageElement.src = image_name;
	}

    }

    attributeChangedCallback(name, oldValue, newValue) {
	console.log(`Attribute ${name} has changed.`);
    }

}

customElements.define("preview-button", PreviewButton);
