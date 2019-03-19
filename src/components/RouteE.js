import React from 'react';
// Stateless Functional Component
const RouteE = ({ selectedCity, selectedRoute }) => (
    // Conditional rendering of routes
    selectedCity === 'E' && selectedRoute === 'a'
        ?   <p>A ==&gt; E : 7<br/>
                A ==&gt; B ==&gt; E : NO SUCH ROUTE<br/>
                A ==&gt; D ==&gt; E : 11
            </p>
        :   <p>A ==&gt; B ==&gt; C ==&gt; E : 11<br/>
                A ==&gt; B ==&gt; C ==&gt; D ==&gt; E : 19
            </p>
)

export default RouteE;