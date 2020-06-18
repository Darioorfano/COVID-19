
     document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'dayGrid' ],
          locale:'es'/*locale:'es' es para cambiar el idioma al español*/
        
        });

        calendar.render();
      });
  