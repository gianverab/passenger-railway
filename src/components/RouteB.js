import React from 'react';
// Stateless Functional Component
const RouteB = ({ selectedCity, selectedRoute }) => (
    // Conditional rendering of routes
    selectedCity === 'B' && selectedRoute === 'a'
        ?   <p>A ==&gt; B : 5<br/>
                A ==&gt; D ==&gt; B : NO SUCH ROUTE<br/>
                A ==&gt; E ==&gt; B : 10
            </p>
        :   <p>A ==&gt; D ==&gt; E ==&gt; B : 14<br/>
                A ==&gt; D ==&gt; C ==&gt; E ==&gt; B : 18
            </p>
)

export default RouteB;
