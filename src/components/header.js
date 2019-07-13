import React from 'react';
import {  Link } from 'react-router-dom'
export function Header() {
    return (
        <div className="header" id="page-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/counter" className="nav-link">Counter</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notes" className="nav-link">NotesBook</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/table" className="nav-link">Table Form</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
