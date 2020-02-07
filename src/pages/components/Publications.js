import React, {useState} from 'react';
import publicationsStyles from "./styles/publications.module.css"

export default () => {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
        getClassNames();
    }

    const getClassNames = () => {
        if(open) return publicationsStyles.active;
        return '';
    }

    return (
        <div className="publications-grid">
        <div className="publication">


        <button type="button" onClick={handleToggle} className={`${publicationsStyles.collapsible} ${getClassNames()}`}>Open Collapsible</button>
        <div className={open ? `${publicationsStyles.panelCollapse}`: `${publicationsStyles.panelCollapse} ${publicationsStyles.panelClose}`}>
            <p>Lorem ipsum...</p>
        </div>

        {/* <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
                         
              <button
                onClick={handleToggle} >Collapsible list group</button>
            </h4>
          </div>
            <div className={open ? `${publicationsStyles.panelCollapse}`: `${publicationsStyles.panelCollapse} ${publicationsStyles.panelClose}`}
            >
            <ul className="list-group">
              <li className="list-group-item">One</li>
              <li className="list-group-item">Two</li>
              <li className="list-group-item">Three</li>
            </ul>
            </div>
            </div>
        </div> */}


        <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks">The
                    effects of strategic organisational change and practices on
                    psychosocial risks</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector">Prevention
                    of work-related violence to staff in the education
                    sector</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer" href="http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom">Worker
                    participation in the United Kingdom</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview">Detachment and
                    recovery after work: An overview</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer" href="http://oshwiki.eu/wiki/Presenteeism:_An_overview">Presenteeism: An
                    overview</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/Workaholism_and_the_culture_of_competition:_OSH_consequences">Workaholism
                    and the culture of competition: OSH consequences</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks">The
                    effects of strategic organisational change and practices on
                    psychosocial risks</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector">Prevention
                    of work-related violence to staff in the education
                    sector</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer" href="http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom">Worker
                    participation in the United Kingdom</a></h3>
        </div>
        <div className="publication">
            <h3><a target="_blank" rel="noopener noreferrer"
                    href="http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview">Detachment and
                    recovery after work: An overview</a></h3>
        </div>
    </div>
    )
};