

      
      document.addEventListener('DOMContentLoaded', function() {
    
      var calendarEl = document.getElementById('calendar');
      
        var calendar = new FullCalendar.Calendar(calendarEl, {
          
         
          plugins: ['interaction','dayGrid','timeGrid','list'],/*Si no pongo la carpeta interaction,list ni timegrid
          no va a funcionar los botones de mes semana y dia
         */
        
          header: {
            left:'prev,next today',
            center:'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
            
          },
          events: [
            {
              title: 'Vacuna gripe porcina',
              start: '2020-06-25'
            },
          {
            title:'Vacuna hepatitis B',
            start: '2020-07-24'
          },
          {
          title:'Vacuna fiebre amarilla',
          start: '2020-08-01'  
          }
        ]
        });
        /*Establezco que el calendario se ponga en español*/  
        calendar.setOption("locale","Es");
        
          calendar.render();
      });
  