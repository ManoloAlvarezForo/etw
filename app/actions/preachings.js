export const LOAD_PREACHINGS = 'LOAD_PREACHINGS';
export const GET_PREACHING_MODEL = 'GET_PREACHING_MODEL';

const preachingsList = [
  {
    id: 1,
    fullDate: '01 Enero 2018 - 03 Enero 2018',
    initDate: '01 Enero 2018',
    endDate: '03 Enero 2018',
    preachings: [
      {
        date: '1/1/2018',
        day: 'Lunes',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Boris Garcia',
            side: 'Casa Garcia',
            time: '09:15',
            moment: 'Manana',
            territory: 'A-5'
          },
          {
            preachingLead: 'Alberto Pena',
            side: 'Casa Pena',
            time: '04:15',
            moment: 'Tarde',
            territory: 'A-18'
          }
        ]
      },
      {
        date: '2/1/2018',
        day: 'Martes',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Boris Birbuet',
            side: 'Calixto Encinas',
            time: '08:15',
            moment: 'Manana',
            territory: 'B-5'
          }
        ]
      },
      {
        date: '3/1/2018',
        day: 'Miercoles',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Gaston Delafuente',
            side: 'Casa Delafuente',
            time: '08:15',
            moment: 'Manana',
            territory: 'B-1'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    fullDate: '04 Enero 2018 - 07 Enero 2018',
    initDate: '04 Enero 2018',
    endDate: '07 Enero 2018',
    preachings: [
      {
        date: '1/1/2018',
        day: 'Lunes',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Boris Garcia',
            side: 'Casa Garcia',
            time: '09:15',
            moment: 'Manana',
            territory: 'A-5'
          },
          {
            preachingLead: 'Alberto Pena',
            side: 'Casa Pena',
            time: '04:15',
            moment: 'Tarde',
            territory: 'A-18'
          }
        ]
      },
      {
        date: '2/1/2018',
        day: 'Martes',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Boris Birbuet',
            side: 'Calixto Encinas',
            time: '08:15',
            moment: 'Manana',
            territory: 'B-5'
          }
        ]
      },
      {
        date: '3/1/2018',
        day: 'Miercoles',
        month: 'Enero',
        year: '2018',
        preachingEvents: [
          {
            preachingLead: 'Gaston Delafuente',
            side: 'Casa Delafuente',
            time: '08:15',
            moment: 'Manana',
            territory: 'B-1'
          }
        ]
      }
    ]
  }
]

export const loadPreachings = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PREACHINGS,
      preachingsList: preachingsList
    });
  };
}

export const getPreachingModel = (preachingId?) => {
  let preachingModel = { date: 'Nueva Salida', preachings: []};

    if (preachingId) {
      preachingModel = preachingsList.filter(p => {
        return p.id === preachingId
      })[0];
    }
  
  return dispatch => {
    dispatch({
      type: GET_PREACHING_MODEL,
      preachingModel: preachingModel
    });
  };
}
