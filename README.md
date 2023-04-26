# Usage-based Pricing Done Right

The repo behind [UsageBased](https://usagebased.org/), helping people discover products that put customers first with usage-based pricing.

# Contributions welcome! 
We're looking for contributions around:
- Compiling products that have a usage-based pricing model
- Compiling usage or metered billing infrastructur vendors 

### Adding Usage-based pricing vendors

1. Create a new `mdx` file inside the `/vendors` folder as `<vendor_name>.mdx`
2. Add the vendor details in the folloing format.
   ```
   ---
    title: Appsmith
    url: https://www.appsmith.com/pricing (Link to their pricing page)
    industry: Internal Tools
    usage_metrics: Hours (w/ a cap)
    links: https://www.appsmith.com/blog/usage-based-pricing (Annoucemnts / Related links)
    oss: OSS/NO
    type: Transactional
    date_updated: 21-04-2023
    ---
   ```
3. Create a PR


### Adding billing vendors

1. Add a new item inside `billing_vendors/vendors.json` file.
2. Use the following format:
    ```
    {
        "name": "",
        "url": ""
      },
    ```
# Run by Appsmith

We're an open source development platform to build and launch internal apps quickly. [Have a look!](https://appsmith.com/)
