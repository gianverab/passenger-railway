import React from 'react';
// Stateless Functional Component
const RouteD = ({ selectedCity, selectedRoute }) => (
    // Conditional rendering of routes
    selectedCity === 'D' && selectedRoute === 'a'
        ?   <p>A ==&gt; D : 5<br/>
                A ==&gt; B ==&gt; D : NO SUCH ROUTE<br/>
            </p>
        :   <p>A ==&gt; B ==&gt; C ==&gt; D : 17<br/>
                A ==&gt; E ==&gt; B ==&gt; C ==&gt; D : 22
            </p>
)

export default RouteD;