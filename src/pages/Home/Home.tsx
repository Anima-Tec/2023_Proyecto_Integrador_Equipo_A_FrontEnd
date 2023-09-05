import PageHeader from '../../components/header/Header'
import LeftContainer from '../../components/left-container/wide/WideLeftContainer.js'
import "./Home.css"
import React from 'react'
function Home() {
  return (
    <div className="homeContainer">
      <PageHeader valor="Home" />
      <div className="homeContent">
        <LeftContainer valor="Login" />
        <div className="contentContainer">
          <div className="contentWelcome">
            <h2>Welcome to +FOCO</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              convallis neque mauris, at mattis augue consequat non. Maecenas
              sodales, felis sit amet mattis efficitur, libero tortor convallis
              enim, ut iaculis justo felis aliquam dolor. Sed vitae finibus magna,
              in luctus sapien.
            </p>
          </div>
          <div className="contentNav">
            <img
              src="https://lh3.googleusercontent.com/fife/AKsag4PAA5kA-cd6CjRg84l767yw8M2x40qchIPdzSgmz601nUIM9Oxm9PsnKxYXNp2tSKyCmXZxKjDicfZh5O9skLXEcq80yMpVNIkQz567IyneOnUriTQpyOwhvAkvLZSd8gerngEKj3gswawvuQ2DSaZKe0vMyx6NgwpPIYj3J8LpOijStLLt_elwPRdoxiZGkeHlVlSXa0cKm8d37G_P31kedpYVJlE9l9tnLeq1uPP7tXezzpMf2GvvTvwSnWwDaje5s0mMSNHagbTMR1n9xy-ZjP4SdV_7GSuAluu_4QiDtIlk-Vu0I8UfnW7uqA66UOwqlBKiYMa_YDQ2VPoE8zbsXeImpCa8CHzTYfUHTtSmKKnamWjQmD27XqgXanri4k35kwHarkgPuBwSWLWu9SU1VeRmRxsSTm9r-IooxzjBewB3fLRmlYZo3Igtwfl3H8fMj5CHDiRMURs0jnsvihv4srnfi_frHr5Ural8Qxiv8eHicCLLdfJg5gO6UQjOWXQwSFREPMn7r70XLSyqkfW0SvffgSXAHPifkiAZ4TrdX6BFBqudExf6p5y07Nl-vnRp9xIJGnJe12WInW4E13xbFWZwZIGwysUxnPQ7KYAOlmb7AVb1GT2CVdS4mmxL_jF2duMKpgD9qf-9kGgzJ_lVfU7AjF0kpVKoP43K_AvrvQanzvyQSW57Ss56134nVhWERPzOYUQ2-luQv9t6si9QJtRp2y35npXvdHG2lNfiDkUk2GeXp-ntX_6LhQpXPa7KMRBFOvq2jpL2xbUIP0WayYRhi9lntaqEw_GSX-xWnj2wOrJeQtBHdpl_2R27aodfX8NmlR7SZGxIVDkfUw94_w1OWnrsHKcKp3SSRQwutYxcOhe_9aT_zXzM7PqPkvuQuTf1WYLEeTXPahhaiLqZhn5erhgRKBCfxsxhzXfjczF5MA8HzKR1ih2BWtCl4p6eE5nCHoInC0r0pw5cF46UZYG-gaEk8vyoTFBhz0vxj0Ew6ll_xcZ1epH-rtwk8zqD6Wh24uCU6SaGpUvyw_EnrRSYGxIMHkf1h7sFI4K01TSHHMpcSH4LHY7-0upZyaaP5kiRK7iEEWrhmpdE9JLZmPZ6ziysXD62kb6vVkH9dN3WgxrsKmf___eUgRVyHC9eL4RcjeK7O9JtK7lFqVVDAPsIDzu4ASMLNSfiC5C5GItO5rvodutsGLe4tkq-NsoxQ0U4LVYB1FYrXbUt_1YOvDiSjgdCQ4shifWn-ylZdA-X4bxvtKn91Wpv2oHAfG0DzP2ofsR2FgLd4PLII3yuRoakvtyv1lvXyx0MUxvWPTcz88QCUkiSpA3M0lKlCnbbLHKBsziaNl-4jQvv64cUXqQv8Vk3wYYhDF2s9XmG_ETHfyubx5wc1-0wmky3NGlW6u59otmeRndTNAVXsByXtwKP0dgPzg8-8f9ao433W5qzZNO21miKoNKmZdHdylYumkm24f-LEAfA4iWcxN-hybip-pYlB-LQ5GHDSmpYs9XShz4gU7nk-zKhPFp_ezqYyoVfYAcWQWzfu_SH_CXGxNKgIWufmwCWNRjvEDE1NrE5oxlCqwOuRIR8ADnfvX-dlb-schmARg=w1920-h892"
              alt="logo"
            />
            <div className="contentNavLine"></div>
            <nav>
              <a href="#">Reports</a>
              <a href="#">My Reports</a>
              <a href="#">Reports History</a>
              <a href="#">Create Report</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
