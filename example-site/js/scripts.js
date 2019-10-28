// function makeCollapsibles() {
//   var headers = document.querySelectorAll( '.faq__question h3' );

//   for ( var i = 0; i < headers.length; i++ ) {
//     var header = headers[ i ];
//     var panel = document.getElementById( 'answer-' + ( i + 1 ) );
//     var button = document.createElement( 'button' );

//     button.type = 'button';
//     button.textContent = header.textContent;
//     button.setAttribute( 'aria-controls', 'answer-' + ( i + 1 ) );
//     header.innerHTML = '';
//     header.appendChild( button );

//     panel.setAttribute( 'hidden', 'hidden' );

//     button.addEventListener( 'click', function( button ) {
//       var button = button.currentTarget;
//       var panelID = button.getAttribute( 'aria-controls' );
//       var panel = document.getElementById( panelID );

//       if ( button.getAttribute( 'aria-expanded' ) && button.getAttribute( 'aria-expanded' )   === 'true' ) {
//         button.setAttribute( 'aria-expanded', 'false' );
//         panel.setAttribute(' hidden', 'hidden' );
//       }
//       else {
//         button.setAttribute( 'aria-expanded', 'true' );
//         panel.removeAttribute( 'hidden', 'hidden' );
//       }
//     });
//   }
// };

// makeCollapsibles();