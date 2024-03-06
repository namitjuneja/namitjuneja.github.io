function deactivate_all_elements(){
    document.querySelector(".navigation-item.education").classList.remove("active");
    document.querySelector(".navigation-item.experience").classList.remove("active");
    document.querySelector(".navigation-item.publications").classList.remove("active");

    document.querySelector(".main-content.education").classList.remove("active");
    document.querySelector(".main-content.experience").classList.remove("active");
    document.querySelector(".main-content.publications").classList.remove("active");  
  }
  
  function activate_element(item) {
    navigation_item_query = ".navigation-item.".concat(item);
    document.querySelector(navigation_item_query).classList.add("active");

    navigation_content_query = ".main-content.".concat(item);
    document.querySelector(navigation_content_query).classList.add("active");
  }
  
  
  document.getElementsByClassName("education")[0].onclick = function(){ 
    deactivate_all_elements();
    activate_element("education"); 
  };
  
  document.getElementsByClassName("experience")[0].onclick = function(){ 
    deactivate_all_elements();
    activate_element("experience"); 
  };
  
  document.getElementsByClassName("publications")[0].onclick = function(){ 
    deactivate_all_elements();
    activate_element("publications"); 
  };
  
  