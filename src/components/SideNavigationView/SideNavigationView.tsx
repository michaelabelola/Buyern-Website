import React, { FC } from 'react';
import styles from './SideNavigationView.module.scss';

interface SideNavigationViewProps { }

const SideNavigationView: FC<SideNavigationViewProps> = () => (
  <aside className="navbar navbar-vertical navbar-expand-lg navbar-transparent">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <h1 className="navbar-brand navbar-brand-autodark">
        <a href=".">
          <img src="./static/logo.svg" width="110" height="32" alt="Tabler" className="navbar-brand-image" />
        </a>
      </h1>
      <div className="navbar-nav d-none flex-row">
        <div className="nav-item d-lg-flex me-3">
          <div className="btn-list">
            <a href="https://github.com/tabler/tabler" className="btn" target="_blank" rel="noreferrer">
              {/* <!-- Download SVG icon from http://tabler-icons.io/i/brand-github --> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
              Source code
            </a>
            <a href="https://github.com/sponsors/codecalm" className="btn" target="_blank" rel="noreferrer">
              {/* <!-- Download SVG icon from http://tabler-icons.io/i/heart --> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
              Sponsor
            </a>
          </div>
        </div>
        <div className=" d-lg-flex">
          <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip"
            data-bs-placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
          </a>
          <a href="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip"
            data-bs-placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
          </a>
          <div className="nav-item dropdown d-md-flex me-3">
            <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1} aria-label="Show notifications">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
              <span className="badge bg-red"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Last updates</h3>
                </div>
                <div className="list-group list-group-flush list-group-hoverable">
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
                      <div className="col text-truncate">
                        <a href="#" className="text-body d-block">Example 1</a>
                        <div className="d-block text-muted text-truncate mt-n1">
                          Change deprecated html tags to text decoration classes (#29604)
                        </div>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="list-group-item-actions">
                          {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto"><span className="status-dot d-block"></span></div>
                      <div className="col text-truncate">
                        <a href="#" className="text-body d-block">Example 2</a>
                        <div className="d-block text-muted text-truncate mt-n1">
                          justify-content:between ⇒ justify-content:space-between (#29734)
                        </div>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="list-group-item-actions show">
                          {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto"><span className="status-dot d-block"></span></div>
                      <div className="col text-truncate">
                        <a href="#" className="text-body d-block">Example 3</a>
                        <div className="d-block text-muted text-truncate mt-n1">
                          Update change-version.js (#29736)
                        </div>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="list-group-item-actions">
                          {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
                      <div className="col text-truncate">
                        <a href="#" className="text-body d-block">Example 4</a>
                        <div className="d-block text-muted text-truncate mt-n1">
                          Regenerate package-lock.json (#29730)
                        </div>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="list-group-item-actions">
                          {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span className="avatar avatar-sm" style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}></span>
            <div className="d-none d-xl-block ps-2">
              <div>Paweł Kuna</div>
              <div className="mt-1 small text-muted">UI Designer</div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" className="dropdown-item">Status</a>
            <a href="#" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Feedback</a>
            <div className="dropdown-divider"></div>
            <a href="./settings.html" className="dropdown-item">Settings</a>
            <a href="./sign-in.html" className="dropdown-item">Logout</a>
          </div>
        </div>

      </div>

      <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="navbar-nav pt-lg-3">
          <li className="nav-item">
            <a className="nav-link" href="./index.html" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/home --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              </span>
              <span className="nav-link-title">
                Home
              </span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/package --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
              </span>
              <span className="nav-link-title">
                Interface
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-menu-columns">
                <div className="dropdown-menu-column">
                  <a className="dropdown-item" href="./empty.html">
                    Empty page
                  </a>
                  <a className="dropdown-item" href="./accordion.html">
                    Accordion
                  </a>
                  <a className="dropdown-item" href="./blank.html">
                    Blank page
                  </a>
                  <a className="dropdown-item" href="./buttons.html">
                    Buttons
                  </a>
                  <div className="dropend">
                    <a className="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                      Cards
                      <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                    </a>
                    <div className="dropdown-menu">
                      <a href="./cards.html" className="dropdown-item">
                        Sample cards
                      </a>
                      <a href="./card-actions.html" className="dropdown-item">
                        Card actions
                        <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                      </a>
                      <a href="./cards-masonry.html" className="dropdown-item">
                        Cards Masonry
                      </a>
                    </div>
                  </div>
                  <a className="dropdown-item" href="./colors.html">
                    Colors
                  </a>
                  <a className="dropdown-item" href="./datagrid.html">
                    Data grid
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./datatables.html">
                    Datatables
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./dropdowns.html">
                    Dropdowns
                  </a>
                  <a className="dropdown-item" href="./modals.html">
                    Modals
                  </a>
                  <a className="dropdown-item" href="./maps.html">
                    Maps
                  </a>
                  <a className="dropdown-item" href="./map-fullsize.html">
                    Map fullsize
                  </a>
                  <a className="dropdown-item" href="./maps-vector.html">
                    Vector maps
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./navigation.html">
                    Navigation
                  </a>
                  <a className="dropdown-item" href="./charts.html">
                    Charts
                  </a>
                </div>
                <div className="dropdown-menu-column">
                  <a className="dropdown-item" href="./pagination.html">
                    {/* <!-- Download SVG icon from http://tabler-icons.io/i/pie-chart --> */}
                    Pagination
                  </a>
                  <a className="dropdown-item" href="./placeholder.html">
                    Placeholder
                  </a>
                  <a className="dropdown-item" href="./tabs.html">
                    Tabs
                  </a>
                  <a className="dropdown-item" href="./tables.html">
                    Tables
                  </a>
                  <a className="dropdown-item" href="./carousel.html">
                    Carousel
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./lists.html">
                    Lists
                  </a>
                  <a className="dropdown-item" href="./typography.html">
                    Typography
                  </a>
                  <a className="dropdown-item" href="./offcanvas.html">
                    Offcanvas
                  </a>
                  <a className="dropdown-item" href="./markdown.html">
                    Markdown
                  </a>
                  <a className="dropdown-item" href="./dropzone.html">
                    Dropzone
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./lightbox.html">
                    Lightbox
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./tinymce.html">
                    TinyMCE
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./inline-player.html">
                    Inline player
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <div className="dropend">
                    <a className="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                      Authentication
                    </a>
                    <div className="dropdown-menu">
                      <a href="./sign-in.html" className="dropdown-item">
                        Sign in
                      </a>
                      <a href="./sign-in-illustration.html" className="dropdown-item">
                        Sign in with illustration
                      </a>
                      <a href="./sign-in-cover.html" className="dropdown-item">
                        Sign in with cover
                      </a>
                      <a href="./sign-up.html" className="dropdown-item">
                        Sign up
                      </a>
                      <a href="./forgot-password.html" className="dropdown-item">
                        Forgot password
                      </a>
                      <a href="./terms-of-service.html" className="dropdown-item">
                        Terms of service
                      </a>
                      <a href="./auth-lock.html" className="dropdown-item">
                        Lock screen
                      </a>
                    </div>
                  </div>
                  <div className="dropend">
                    <a className="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
                      {/* <!-- Download SVG icon from http://tabler-icons.io/i/file-minus --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><line x1="9" y1="14" x2="15" y2="14" /></svg>
                      Error pages
                    </a>
                    <div className="dropdown-menu">
                      <a href="./error-404.html" className="dropdown-item">
                        404 page
                      </a>
                      <a href="./error-500.html" className="dropdown-item">
                        500 page
                      </a>
                      <a href="./error-maintenance.html" className="dropdown-item">
                        Maintenance page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./form-elements.html" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/checkbox --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 11 12 14 20 6" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
              </span>
              <span className="nav-link-title">
                Forms
              </span>
            </a>
          </li>

          <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="true" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/layout-2 --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x="4" y="4" width="6" height="5" rx="2" /><rect x="4" y="13" width="6" height="7" rx="2" /><rect x="14" y="4" width="6" height="7" rx="2" /><rect x="14" y="15" width="6" height="5" rx="2" /></svg>
              </span>
              <span className="nav-link-title">
                Layout
              </span>
            </a>
            <div className="dropdown-menu show">
              <div className="dropdown-menu-columns">
                <div className="dropdown-menu-column">
                  <a className="dropdown-item" href="./layout-horizontal.html">
                    Horizontal
                  </a>
                  <a className="dropdown-item" href="./layout-boxed.html">
                    Boxed
                    <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
                  </a>
                  <a className="dropdown-item" href="./layout-vertical.html">
                    Vertical
                  </a>
                  <a className="dropdown-item active" href="./layout-vertical-transparent.html">
                    Vertical transparent
                  </a>
                  <a className="dropdown-item" href="./layout-vertical-right.html">
                    Right vertical
                  </a>
                  <a className="dropdown-item" href="./layout-condensed.html">
                    Condensed
                  </a>
                  <a className="dropdown-item" href="./layout-combo.html">
                    Combined
                  </a>
                </div>
                <div className="dropdown-menu-column">
                  <a className="dropdown-item" href="./layout-navbar-dark.html">
                    Navbar dark
                  </a>
                  <a className="dropdown-item" href="./layout-navbar-sticky.html">
                    Navbar sticky
                  </a>
                  <a className="dropdown-item" href="./layout-navbar-overlap.html">
                    Navbar overlap
                  </a>
                  <a className="dropdown-item" href="./layout-rtl.html">
                    RTL mode
                  </a>
                  <a className="dropdown-item" href="./layout-fluid.html">
                    Fluid
                  </a>
                  <a className="dropdown-item" href="./layout-fluid-vertical.html">
                    Fluid vertical
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./icons.html" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/ghost --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" /><line x1="10" y1="10" x2="10.01" y2="10" /><line x1="14" y1="10" x2="14.01" y2="10" /><path d="M10 14a3.5 3.5 0 0 0 4 0" /></svg>
              </span>
              <span className="nav-link-title">
                2681 icons
              </span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#navbar-help" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
              <span className="nav-link-icon d-md-none d-lg-inline-block">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="9" /><line x1="15" y1="15" x2="18.35" y2="18.35" /><line x1="9" y1="15" x2="5.65" y2="18.35" /><line x1="5.65" y1="5.65" x2="9" y2="9" /><line x1="18.35" y1="5.65" x2="15" y2="9" /></svg>
              </span>
              <span className="nav-link-title">
                Help
              </span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="./docs/index.html">
                Documentation
              </a>
              <a className="dropdown-item" href="./changelog.html">
                Changelog
              </a>
              <a className="dropdown-item" href="https://github.com/tabler/tabler" target="_blank" rel="noopener">
                Source code
              </a>
              <a className="dropdown-item text-pink" href="https://github.com/sponsors/codecalm" target="_blank" rel="noopener">
                {/* <!-- Download SVG icon from http://tabler-icons.io/i/heart --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                Sponsor project!
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>

);
interface SideNavigationItemProps {
  isDropDown?:boolean;
}
const SideNavigationItem: FC<SideNavigationViewProps> = () => {

  return (
    <li className="nav-item dropdown">







      <a className="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
        </span>
        <span className="nav-link-title">
          Extra
        </span>
      </a>
      <div className="dropdown-menu">
        <div className="dropdown-menu-columns">
          <div className="dropdown-menu-column">
            <a className="dropdown-item" href="./activity.html">
              Activity
            </a>
            <a className="dropdown-item" href="./gallery.html">
              Gallery
            </a>
            <a className="dropdown-item" href="./invoice.html">
              Invoice
            </a>
            <a className="dropdown-item" href="./search-results.html">
              Search results
            </a>
            <a className="dropdown-item" href="./pricing.html">
              Pricing cards
            </a>
            <a className="dropdown-item" href="./pricing-table.html">
              Pricing table
            </a>
            <a className="dropdown-item" href="./faq.html">
              FAQ
              <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
            </a>
            <a className="dropdown-item" href="./users.html">
              Users
            </a>
            <a className="dropdown-item" href="./license.html">
              License
            </a>
          </div>
          <div className="dropdown-menu-column">
            <a className="dropdown-item" href="./logs.html">
              Logs
              <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
            </a>
            <a className="dropdown-item" href="./music.html">
              Music
            </a>
            <a className="dropdown-item" href="./tasks.html">
              Tasks
              <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
            </a>
            <a className="dropdown-item" href="./uptime.html">
              Uptime monitor
            </a>
            <a className="dropdown-item" href="./widgets.html">
              Widgets
            </a>
            <a className="dropdown-item" href="./wizard.html">
              Wizard
            </a>
            <a className="dropdown-item" href="./settings.html">
              Settings
              <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
            </a>
            <a className="dropdown-item" href="./job-listing.html">
              Job listing
              <span className="badge badge-sm bg-green text-uppercase ms-2">New</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
export default SideNavigationView;
