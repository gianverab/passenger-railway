import React from 'react';
// Stateless Functional Component
const RouteC = ({ selectedCity, selectedRoute }) => (
    // Conditional rendering of routes
    selectedCity === 'C' && selectedRoute === 'a'
        ?   <p>A ==&gt; C : NO SUCH ROUTE<br/>
                A ==&gt; B ==&gt; C : 9<br/>
                A ==&gt; D ==&gt; C : 13
            </p>
        :   <p>A ==&gt; E ==&gt; B ==&gt; C : 14<br/>
                A ==&gt; D ==&gt; E ==&gt; B ==&gt; C : 18
            </p>
)

export default RouteC;