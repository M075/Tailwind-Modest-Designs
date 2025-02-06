// function accordion() {
//     return {
//         pricingAccordion: [],
//         async init() {
//             try {
//                 const response = await fetch('pricing-accordion.json');
//                 const data = await response.json();
//                 this.pricingAccordion = data.pricingAccordion;
//             } catch (error) {
//                 console.error('Error loading accordion data:', error);
//                 // Fallback data in case the fetch fails
//                 this.pricingAccordion = [
//                     { 
//                         title: 'Error Loading Data', 
//                         content: 'Please check if the JSON file is accessible.',
//                         isOpen: false 
//                     }
//                 ];
//             }
//         }
//     }
// }

function accordion() {
    return {
        pricingAccordion: [
            {
                title: "Catered for business",
                isOpen: false,
                content: `
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th class="py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                                <th class="py-3 text-center text-sm font-semibold text-gray-900">Starter</th>
                                <th class="py-3 text-center text-sm font-semibold text-gray-900">Business</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="py-4 text-sm text-gray-900">Tax Savings</td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg></td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg></td>
                            </tr>
                            <tr>
                                <td class="py-4 text-sm text-gray-900">Multi-accounts</td>
                                <td class="py-4 text-center text-sm text-gray-900">3 accounts</td>
                                <td class="py-4 text-center text-sm font-semibold text-indigo-600">Unlimited</td>
                            </tr>
                            <tr>
                                <td class="py-4 text-sm text-gray-900">Invoicing</td>
                                <td class="py-4 text-center text-sm text-gray-900">3 invoices</td>
                                <td class="py-4 text-center text-sm font-semibold text-indigo-600">Unlimited</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                title: "Other perks",
                isOpen: false,
                content: `
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th class="py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                                <th class="py-3 text-center text-sm font-semibold text-gray-900">Starter</th>
                                <th class="py-3 text-center text-sm font-semibold text-gray-900">Business</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="py-4 text-sm text-gray-900">24/7 customer support</td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg></td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg></td>
                            </tr>
                            <tr>
                                <td class="py-4 text-sm text-gray-900">Budgeting tools</td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></td>
                                <td class="py-4 text-center"><svg class="mx-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg></td>
                            </tr>
                        </tbody>
                    </table>
                `
            }
        ]
    }
}