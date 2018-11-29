using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using example_react_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace example_react_app.Controllers
{
    [Route("api/currency")]
    public class CurrencyController : Controller
    {
        private static Currency current = new Currency
        {
            Name = "CURRENCY",
            ExchangeRates = new Dictionary<string, IDictionary<string, decimal>>
            {
                { "USD", new Dictionary<string, decimal>
                {
                    { "GBP", 0.7563m },
                    { "EUR", 0.8545m },
                } },
                { "GBP", new Dictionary<string, decimal>
                {
                    { "USD", 1.3223m },
                    { "EUR", 1.1299m },
                } },
                { "EUR", new Dictionary<string, decimal>
                {
                    { "USD", 1.1703m },
                    { "GBP", 0.885m },
                } },
            }
        };

        [HttpGet("")]
        public Currency Current()
        {
            return current;
        }
    }
}
