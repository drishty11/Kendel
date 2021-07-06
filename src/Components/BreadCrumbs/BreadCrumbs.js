import React from 'react';
import './BreadCrumbs.css';
import { Link } from 'react-router-dom';
import { RightArrow } from '../../images/Icons/icons';

export default function BreadCrumbs({ crumbs }) {

   
    return (
        <nav className="Nav-breadcrumb position-fixed d-flex">
            <ol className="d-flex flex-row align-items-center mb-0 flex-wrap pl-2">
                {crumbs?.map((crumb,index) => {
                    return (
                        <>
                        <li key={index} className="">
                            <Link to={crumb.to} className="text-decoration-none p-2 p-md-3 other-text crumbName">{crumb.label}</Link>
                        </li>
                            {index === crumbs.length-1 ? '' : <RightArrow />}
                        </>    

                    )
                })}

            </ol>
        </nav>
    )
}
