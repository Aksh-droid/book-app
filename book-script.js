// A $( document ).ready() block.
$(document).ready(function() {
   loadBookData("bookList");

   $('.bookName').on('click', (e) => {
       let $this = $(e.target);
       let $thisId = $this.attr('id');
       $('#' + $thisId + ' > ul.bookDetails').toggle();
       $('#' + $thisId + '> i.editBook').toggle();
   });

   $('#btnHideAll').on('click', (e) => {
       $('ul.bookDetails').hide();
   });

   $('#btnShowAll').on('click', (e) => {
       $('ul.bookDetails').show();
   });

   $('i.editBook').on('click', (e) => {
       $(e.target).toggleClass('bi-save2').toggleClass('bi-pencil-fill');
       let $thisParentId = $(e.target).parent().attr('id');
       $('#' + $thisParentId + ' span.displayBook').toggle();
       $('input.editBook').toggle();
   });
});

function loadBookData(appendId) {
   let appendElement = $(`#${appendId}`);

   appendElement.empty();

   // Sample data
   let data = {
       books: [
           {
            name: "The Fine Print",
            Writer: "Lauren Asher",
            Genre: "Romantic Comedy",
            series : "Yes",
            Recomended: "Yes",
            links: [],
            onKindleUnlimited: true

           },
           {
            name: "The fabric of Our Souls",
            Writer: "K.M.Monrov",
            Genre: "Suspense",
            series: "No",
            Recomended: "No",
            links: [],
            onKindleUnlimited: true
            
           }
       ]
   };

   $.each(data.books, (index, book) => {
       appendElement.append(`
           <li id="bookNo${index}Name" class="list-group-item mb-1 bookName">
               ${book.name}
               <i id="editBookNo${index}" class="bi bi-pencil-fill float-end editBook"></i>
               <ul class="list-group bookDetails">
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Author</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Author">${book.author}</span>
                       <input id="bookNo${index}AuthorEdit" type="text" class="form-control editBook" value="${book.author}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Status</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Status">${book.status}</span>
                       <input id="bookNo${index}StatusEdit" type="text" class="form-control editBook" value="${book.status}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Genre</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Genre">${book.genre}</span>
                       <input id="bookNo${index}GenreEdit" type="text" class="form-control editBook" value="${book.genre}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Pages</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Pages">${book.pages}</span>
                       <input id="bookNo${index}PagesEdit" type="text" class="form-control editBook" value="${book.pages}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Summary</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Summary">${book.summary}</span>
                       <input id="bookNo${index}SummaryEdit" type="text" class="form-control editBook" value="${book.summary}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Notes</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Notes">${book.notes}</span>
                       <input id="bookNo${index}NotesEdit" type="text" class="form-control editBook" value="${book.notes}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Tags</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Tags">${book.tags}</span>
                       <input id="bookNo${index}TagsEdit" type="text" class="form-control editBook" value="${book.tags}">
                   </li>
                   <li class="input-group w-100">
                       <span class="w-20 input-group-text">Links</span>
                       <span class="list-group-item form-control displayBook" id="bookNo${index}Links">${book.links}</span>
                       <input id="bookNo${index}LinksEdit" type="text" class="form-control editBook" value="${book.links}">
                   </li>
               </ul>
           </li>
       `);

       $('.bookDetails').hide();
       $('i.editBook').hide();
       $('.editBook').hide();
   });
}








