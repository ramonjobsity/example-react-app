
using System.Collections.Generic;

namespace example_react_app.Models
{
    public class Currency
    {
        public string Name { get; set; }

        public IDictionary<string, IDictionary<string, decimal>> ExchangeRates { get; set; }
    }
}
