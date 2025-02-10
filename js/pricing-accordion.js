function accordion() {
    return {
        pricingAccordion: [
            {
                title: "Compare Features",
                isOpen: false,
                content: `
                    <div class="overflow-x-auto pb-4">
                        <table class="min-w-full divide-y divide-gray-200">
                            ${document.querySelector('#feature-comparison-template').innerHTML}
                        </table>
                    </div>
                `
            }
        ]
    }
}