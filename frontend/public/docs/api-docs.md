# EthiCopy Ethics API Developer Portal
`Build Trust Programmatically`

## 📡 API Overview
The EthiCopy AI Engine is exposed through a secure, high-concurrency REST API, designed for integration into enterprise-grade Headless CMS, CRM, and Marketing Automation tools.

---

## 🔑 Authentication
Bearer Token authentication is required.
```bash
$ curl -X POST https://api.ethicopy.io/v2/diagnose \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## 🧪 Endpoint: `/v2/diagnose`
`POST` method to analyze marketing copy for deceptive intent.

### Parameters
| Name | Type | Description |
| :--- | :--- | :--- |
| `content` | string | The marketing text to analyze (max 5,000 chars). |
| `domain` | string | e.g., 'ecommerce', 'fintech', 'saas' for contextual logic. |
| `strictness` | int | 1-10 level of ethics threshold. |

### Sample Response (JSON)
```json
{
  "request_id": "eth_7729x_2026",
  "overall_ethics_index": 42,
  "risk_assessment": {
    "level": "CRITICAL",
    "detected_patterns": [
      { "type": "False Urgency", "confidence": 0.98 },
      { "type": "Emotional Manipulation", "confidence": 0.85 }
    ]
  },
  "white_nudge_alternatives": [
    { "type": "Transparency", "text": "Over 200 users viewed this in the last 24h." }
  ]
}
```

---

## ⚠️ Error Codes
- `401 Unauthorized`: Invalid or expired API key.
- `429 Too Many Requests`: Rate limit reached (Enterprise: 1,000 req/sec).
- `503 Service Unavailable`: AI engine scale-up in progress.

---
[Contact Support](support@ethicopy.io) | [API Status Dashboard](https://status.ethicopy.io)
