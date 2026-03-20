import { notFound } from "next/navigation"
import BlogPostClient from "./blog-post-client"

// Blog posts metadata
const blogPostsData: Record<string, any> = {
  "introduction-to-machine-learning": {
    title: "Introduction to Machine Learning: From Theory to Practice",
    date: "2026-01-07",
    readTime: "12 min",
    tags: ["Machine Learning", "Python", "Data Science"],
  },
  "bayesian-spatial-analysis": {
    title: "Bayesian Spatial Analysis with R-INLA",
    date: "2026-01-05",
    readTime: "15 min",
    tags: ["Bayesian Statistics", "R", "Spatial Analysis"],
  },
  "transformers-nlp": {
    title: "Transformers and NLP: The Language Processing Revolution",
    date: "2026-01-03",
    readTime: "10 min",
    tags: ["NLP", "Transformers", "Deep Learning"],
  },
}

// Blog posts content
const blogPostsContent: Record<string, any> = {
  "introduction-to-machine-learning": {
    content: `
## Introduction

Machine Learning has revolutionized the way we approach complex problems in data science. In this article, we'll explore the fundamental concepts and how to apply them in real projects.

## What is Machine Learning?

Machine learning is a branch of artificial intelligence that allows systems to learn and improve automatically from experience without being explicitly programmed.

### Types of Machine Learning

1. **Supervised Learning**: The model learns from labeled data
2. **Unsupervised Learning**: The model finds patterns in unlabeled data
3. **Reinforcement Learning**: The model learns through rewards

## Fundamental Algorithms

### Linear Regression

Linear regression is one of the simplest yet most powerful algorithms:

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

# Create sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict([[6]])
print(f"Prediction for x=6: {predictions[0]:.2f}")
\`\`\`

### Decision Trees

Decision trees are excellent for classification problems:

\`\`\`python
from sklearn.tree import DecisionTreeClassifier

# Train a classifier
clf = DecisionTreeClassifier(max_depth=3)
clf.fit(X_train, y_train)

# Evaluate the model
accuracy = clf.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2%}")
\`\`\`

## Best Practices

1. **Cross-validation**: Always use k-fold cross-validation
2. **Feature engineering**: The quality of features is crucial
3. **Regularization**: Prevents overfitting
4. **Hyperparameters**: Use Grid Search or Random Search

## Conclusion

Machine Learning is a powerful tool that requires practice and experimentation. The fundamentals we covered here are just the beginning of a fascinating journey.

### Additional Resources

- [Scikit-learn Documentation](https://scikit-learn.org/)
- [Kaggle Learn](https://www.kaggle.com/learn)
- [Fast.ai](https://www.fast.ai/)
    `,
  },
  "bayesian-spatial-analysis": {
    content: `
## Introduction to Bayesian Spatial Analysis

Bayesian spatial analysis allows us to model geographic phenomena considering uncertainty and spatial relationships between observations.

## Why INLA?

INLA (Integrated Nested Laplace Approximations) is a computationally efficient alternative to MCMC for Bayesian models:

- **Speed**: 100-1000x faster than MCMC
- **Accuracy**: Very precise approximations
- **Scalability**: Handles thousands of observations

## Practical Example

Let's analyze pollution data in Spain:

\`\`\`r
library(INLA)
library(sf)
library(ggplot2)

# Load spatial data
data <- st_read("pollution_data.shp")

# Define the model
formula <- pollution ~ temperature + humidity +
           f(spatial.field, model = "matern2d")

# Fit the model
result <- inla(formula,
               family = "gaussian",
               data = data,
               control.compute = list(dic = TRUE, waic = TRUE))

# View results
summary(result)
\`\`\`

## Results Interpretation

Bayesian spatial models give us:

1. **Point estimates**: Posterior mean of parameters
2. **Credibility intervals**: Quantified uncertainty
3. **Spatial field**: Unexplained spatial variation
4. **Predictions**: With prediction intervals

## Visualization

\`\`\`r
# Create prediction map
pred_map <- ggplot(predictions) +
  geom_sf(aes(fill = mean)) +
  scale_fill_viridis_c() +
  theme_minimal() +
  labs(title = "Pollution Prediction",
       fill = "PM2.5")

print(pred_map)
\`\`\`

## Conclusions

INLA is a powerful tool for spatial analysis that combines computational efficiency with Bayesian statistical rigor.
    `,
  },
  "transformers-nlp": {
    content: `
## The Transformers Revolution

Transformers have completely transformed natural language processing. Let's see how they work and how to use them.

## Transformer Architecture

The architecture is based on the **attention** mechanism:

\`\`\`python
import torch
import torch.nn as nn

class AttentionHead(nn.Module):
    def __init__(self, d_model, d_k):
        super().__init__()
        self.d_k = d_k
        self.query = nn.Linear(d_model, d_k)
        self.key = nn.Linear(d_model, d_k)
        self.value = nn.Linear(d_model, d_k)

    def forward(self, x):
        Q = self.query(x)
        K = self.key(x)
        V = self.value(x)

        # Scaled dot-product attention
        attention = torch.softmax(
            Q @ K.transpose(-2, -1) / self.d_k ** 0.5,
            dim=-1
        )
        return attention @ V
\`\`\`

## Using BERT with Hugging Face

\`\`\`python
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained(
    'bert-base-uncased',
    num_labels=2
)

# Tokenize text
text = "This is an example of text classification"
inputs = tokenizer(text, return_tensors="pt", padding=True)

# Make prediction
outputs = model(**inputs)
predictions = torch.softmax(outputs.logits, dim=1)
\`\`\`

## Fine-Tuning for Your Task

\`\`\`python
from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    warmup_steps=500,
    learning_rate=5e-5,
    logging_dir="./logs",
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
)

trainer.train()
\`\`\`

## Practical Applications

1. **Text classification**: Sentiment analysis, topic modeling
2. **Named Entity Recognition**: Entity extraction
3. **Question Answering**: Q&A systems
4. **Text generation**: GPT-style generation

## Conclusion

Transformers are the state of the art in NLP and their use is increasingly accessible thanks to libraries like Hugging Face Transformers.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsData[slug]

  if (!post) {
    notFound()
  }

  const content = blogPostsContent[slug]

  return <BlogPostClient post={post} content={content} />
}
