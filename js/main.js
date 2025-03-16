let img=document.querySelector(".image");
let arrOfColor=["black","#596674","#32322f","#9a8e7e","#8b0101"]
function changeImg(num){
    img.src=`image/${num}.png`
    document.querySelector("nav").style.background=`${arrOfColor[num]}`
    document.querySelector(".landing").style.background=`${arrOfColor[num]}`
}
function buy(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The purchase was completed successfully.✨🎉❤️",
        showConfirmButton: false,
        timer: 1500
    });
}