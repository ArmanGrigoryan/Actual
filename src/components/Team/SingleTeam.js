import React from "react";
import Image from 'comp/Elements/Image';

const SingleTeam = (props) => {
    const { teamClass, image, Title, Designation, isCovering } = props;

	return(
        <div className={(teamClass ? teamClass : 'team-item') + ' card-shadow-light'}>
            <Image 
                src={image} 
                alt={Title}
                className={isCovering ? "object-fit-cover object-cover" : ""}
            />

            <div className="content-part">
                <h4 className="name">
                    {Title ? Title : 'Jhon Pedrocas'}
                </h4>
                <span className="designation">{Designation ? Designation : 'Professor'}</span>
            </div>
        </div>
	)
}

export default SingleTeam