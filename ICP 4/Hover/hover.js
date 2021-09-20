function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
  e = "url('" + $(previewPic).attr('src') + "')"; /*getting image source using id*/
  t = $(previewPic).attr('alt'); /*getting text*/
    document.getElementById("image").style.backgroundImage = e ;
    document.getElementById("image").innerText = t ;
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
    document.getElementById("image").style.backgroundImage = '' ;/*setting back to none*/
    document.getElementById("image").innerText = "move cursor to show here" ;/* changing back to pervious text*/
}

