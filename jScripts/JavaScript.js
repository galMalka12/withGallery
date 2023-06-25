
    let slideIndex = 1;
    showSlides(slideIndex);//הגדרת אינדקס, הפעלת הפנקציה ושליחה של הערך שלו לפונקציה


    function plusSlides(n) {
        showSlides(slideIndex += n);

    }// פונקצייה המאשרת ניווט בגלריה באמצעות החצים

    function currentSlide(n) {
        showSlides(slideIndex = n);

    } // פונקצייה המאפשרת ניווט בגלריה באמצעות לחיצה על התמונות ב 
    //thumnails 

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("galleryPhotos"); // הגדרת משתנה לכל התמונוות הראשיות
        let dots = document.getElementsByClassName("demo"); //בthumbnauls הגדרת משתנה לתמונות
        let captionText = document.getElementById("caption"); //הגדרת משתנה לטקסט תיאור התמונה
        if (n > slides.length) { slideIndex = 1 }
        // תנאי - אם האינדקס גדול מכמות התמונות (משמע שהתרחש מעבר על כל התמונות פעם אחת באמצעות החץ - "הבא") אז האינדקס שווה ל-1 כך שהתמונה הנוכחית שנראה היא התמונה הראשונה - מספר 1
        if (n < 1) { slideIndex = slides.length }
        //תנאי - אם האינדקס קטן מ-1 (משמע שהתרחש מעבר על כל התמונות פעם אחת באמצעות החץ - "הקודם") אז האינדקס שווה לכמות התמונות כך שהתמונה הנוכחית שנראה היא התמונה האחרונה - מספר 5

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        } //  לולאה שתפקידה להסתיר את כל התמונות הראשיות (במידה ולא, בכל קליל על אחד החצים התמונות יוצגו אחת מתחת לשנייה). ת

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active");
        }
        // לולאה שתפקידה להסיר את המצב active מכל התמונות thumbnails.  במידה ולא תתקיים, לאחר מעבר אחד על כל תמונה היא תישאר מודגשת
        slides[slideIndex - 1].style.display = "block"; // תצוגה ראשונית של הגלריה (לפני ביצוע אינטראקציה עם אחד הלחצנים) של התמונה הראשונה לכן המיקום הוא האינדקס פחות אחד.
        dots[slideIndex - 1].className += " active"; // הדגשה של התמונה המוצגת
        captionText.innerHTML = dots[slideIndex - 1].alt; // השמה של הטקסט שכתוב באלט בתוך המשתנה והצגתו בתוך הdiv 
        //captionText
    }
