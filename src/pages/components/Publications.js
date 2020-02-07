import React from 'react';
import PublicationCollapse from './PublicationCollapse';

export default () => {
    const publications = [
        {
            title: `The effects of strategic organisational change and practices on psychosocial risks`,
            description: 'Organisational change is a useful process within an organisation, and could lead to improved practices and procedures. However, it tends to occur to a greater extent during periods of recession or economic turmoil. Regardless as to when it occurs, it is useful to explore the impacts of these changes on occupational safety and health (OSH). This article examines the relationship between various organisational practices (such as, lean production, downsizing and resizing, globalisation, outsourcing, continuous improvement, and process reengineering), and how they affect psychosocial risks in the workplace. In addition, the implications for workers’ health and wellbeing are outlined and discussed.',
            url: 'http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks' 
        },
        {
            title: `Prevention of work-related violence to staff in the education sector`,
            description: 'One of the risks to which staffs in the education sector are exposed is violence. When workers are exposed to violence, it may impact adversely on their health and wellbeing. Additionally, this may affect their ability to function as educators. This article focuses mainly on third-party violence, i.e., that which is perpetrated against staff by pupils / students / parents, but provides as well some information on violence perpetrated by colleagues. It outlines the impact that work-related violence has on those who experience it, and presents good practice and prevention examples that are available for educational institutions and workers in this sector.',
            url: 'http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector' 
        },
        {
            title: `Worker participation in the United Kingdom`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom' 
        },
        {
            title: `Detachment and recovery after work: An overview`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview' 
        },
        {
            title: `Presenteeism: An overview`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Presenteeism:_An_overview' 
        },
        {
            title: `Workaholism and the culture of competition: OSH consequences`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Workaholism_and_the_culture_of_competition:_OSH_consequences' 
        },
        {
            title: `The effects of strategic organisational change and practices on psychosocial risks`,
            description: '',
            url: 'http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks' 
        },
        {
            title: `Prevention of work-related violence to staff in the education sector`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector' 
        },
        {
            title: `Worker participation in the United Kingdom`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom' 
        },
        {
            title: `Detachment and recovery after work: An overview`,
            description: '',
            url: 'http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview' 
        },



        










    ]

    return (
        <div className="publications-grid">
            {publications.map(pub => <PublicationCollapse details={pub}/>)}
    </div>
    )
};