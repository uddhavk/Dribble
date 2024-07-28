var design = document.querySelector('.designer-box');
console.log(design);

designerDesign = document.querySelector('.designer-design');
console.log(designerDesign);

designerDesign.addEventListener('mouseover',function(){
    design.style.display = 'flex';
    design.style.flexDirection = 'column';
});

designerDesign.addEventListener('mouseleave',function(){
    design.style.display = 'none';
});