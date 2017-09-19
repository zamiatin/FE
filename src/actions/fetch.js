export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  dataCart: data
});

export const fetchData = () => dispatch => {
  fetch('http://59be7d9c359bf20011675515.mockapi.io/v1/cart')
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          return response.json()
      .then(responseData => {
          dispatch(fetchSuccess(responseData));
        });
      })
      .catch((err) => console.log('Fetch Error :-S', err));
}