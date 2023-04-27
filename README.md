# Usage-based Pricing Done Right

The repo behind [UsageBased](https://usagebased.org/), helping people discover products that put customers first with usage-based pricing.

# Contributions welcome! 
We're looking for contributions around:
- Compiling products that have a usage-based pricing model
- Compiling usage or metered billing infrastructur vendors 

### Adding Usage-based pricing vendors

1. Create a new `mdx` file inside the `/vendors` folder as `<vendor_name>.mdx`
2. Add the vendor details in the following format.

  Example submission:
   ```
   ---
    company: Appsmith
    url: https://www.appsmith.com/pricing
    category: Internal Tools
    usage_metrics: Hours
    links: https://www.appsmith.com/blog/usage-based-pricing
    oss: OSS
    type: Transactional
    date_updated: 21-04-2023
    ---
   ```

   Fields:
   ```
   company: company or product name in case specific products follow usage based pricing
   url: url of the pricing page
   category: category (the more granular the better)
   usage_metrics: unit of billing
   links: supporting content e.g url of annoucement post
   oss: oss/no
   type: transactional/ub subscription (transactional if there is no minimum commitment for e.g Appsmith; ub subscription if there is a minimum commitment for e.g Hubspot Marketing)
   date_updated: dd-mm-yyyy
   ```

3. Raise a PR, and we'll add it to the list.


### Adding billing vendors

1. Add a new item inside `billing_vendors/vendors.json` file.
2. Add the venfor details in the following format:
    ```json
    {
        "name": "",
        "url": ""
    }
    ```
3. Raise a PR, and we'll add it to the list.

# Run by Appsmith

We're an open source development platform to build and launch internal apps quickly. [Have a look!](https://appsmith.com/)
