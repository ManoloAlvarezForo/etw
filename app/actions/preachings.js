export const LOAD_PREACHINGS = 'LOAD_PREACHINGS';
export const GET_PREACHING_MODEL = 'GET_PREACHING_MODEL';
export const CLEAN_PREACHING_MODEL = 'CLEAN_PREACHING_MODEL';
export const UPDATE_PREACHING_MODEL = 'UPDATE_PREACHING_MODEL';

const getPreachingsList = () => {
   return  [
    {
      id: 1,
      fullDate: '01 Enero 2018 - 03 Enero 2018',
      initDate: '01 Enero 2018',
      endDate: '03 Enero 2018',
      preachingsDays: [
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
      preachingsDays: [
        {
          date: '04 Enero 2018',
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
            },
            {
              preachingLead: 'Luciano Pereira',
              side: 'Calles',
              time: '07:00',
              moment: 'Noche',
              territory: 'A-18'
            }
          ]
        },
        {
          date: '05 Enero 2018',
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
          date: '06 Enero 2018',
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
        },
        {
          date: '07 Enero 2018',
          day: 'Jueves',
          month: 'Enero',
          year: '2018',
          preachingEvents: [
            {
              preachingLead: 'Antonio Banderas',
              side: 'Casa Resmit',
              time: '09:15',
              moment: 'Manana',
              territory: 'B-1'
            }
          ]
        }
      ]
    }
  ]
}

const loadData = () => {
  const data = [];
  preachingsList.forEach(element => {
    data.push(element)
  });
  return data;
}

export const loadPreachings = () => {
  const preachings = getPreachingsList();
  return dispatch => {
    dispatch({
      type: LOAD_PREACHINGS,
      preachings: preachings
    });
  };
}

export const getPreachingModel = (preachingId?) => {
  let preaching = { initDate:'', date: 'Nueva Salida', preachingsDays: []};
  let data = getPreachingsList();
    if (preachingId) {
      preaching = data.filter(p => p.id === preachingId)[0];
    }
  
  return dispatch => {
    dispatch({
      type: GET_PREACHING_MODEL,
      preaching: preaching
    });
  };
}

export const updatePreaching = (preaching) => {
  return dispatch => {
    dispatch({
      type: UPDATE_PREACHING_MODEL,
      preaching: preaching
    });
  };
}

export const cleanPreachingModel = () => {
  return dispatch => {
    dispatch({
      type: CLEAN_PREACHING_MODEL,
      preaching: { date: '', preachingsDays: []}
    });
  };
}
