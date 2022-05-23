// import

// npm

// local
import logoUser from '../../img/icons/user-list.svg';
// style

function Home() {
  return(
    <section className='home' >
      <div className='home_user'>
      <svg
  width="250px"
  height="250px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
    fill="currentColor"
  />
  <path
    d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
    fill="currentColor"
  />
  <path d="M22 11H16V13H22V11Z" fill="currentColor" />
  <path d="M16 15H22V17H16V15Z" fill="currentColor" />
  <path d="M22 7H16V9H22V7Z" fill="currentColor" />
</svg>
      </div>
      <div className='home_spot'>
      </div>
      <div className='home_comment'>
      <svg
  width="250px"
  height="250px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 9H7V7H17V9Z" fill="currentColor" />
  <path d="M7 13H17V11H7V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
    fill="currentColor"
  />
</svg>
      </div>
    </section>

  );
}

export default Home