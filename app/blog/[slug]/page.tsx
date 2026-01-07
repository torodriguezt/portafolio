"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug]

  if (!post) {
    notFound()
  }

  const content = blogPostsContent[params.slug]

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#7ee787] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#e6edf3] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b949e] mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
            <button className="flex items-center gap-2 hover:text-[#7ee787] transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#7ee787]/10 text-[#7ee787] border border-[#7ee787]/20"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: content?.content
                .split("\n")
                .map((line: string) => {
                  // Convertir markdown básico a HTML
                  if (line.startsWith("## ")) {
                    return `<h2 class="text-2xl font-bold text-[#e6edf3] mt-8 mb-4">${line.slice(3)}</h2>`
                  }
                  if (line.startsWith("### ")) {
                    return `<h3 class="text-xl font-bold text-[#e6edf3] mt-6 mb-3">${line.slice(4)}</h3>`
                  }
                  if (line.startsWith("```")) {
                    return line.includes("```python")
                      ? '<pre class="bg-[#161b22] border border-[#21262d] rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-[#e6edf3]">'
                      : line.includes("```r")
                      ? '<pre class="bg-[#161b22] border border-[#21262d] rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-[#e6edf3]">'
                      : "</code></pre>"
                  }
                  if (line.startsWith("- ")) {
                    return `<li class="text-[#8b949e] ml-6">${line.slice(2)}</li>`
                  }
                  if (line.match(/^\d+\. /)) {
                    return `<li class="text-[#8b949e] ml-6">${line.replace(/^\d+\. /, "")}</li>`
                  }
                  if (line.trim() === "") {
                    return "<br/>"
                  }
                  return `<p class="text-[#8b949e] leading-relaxed mb-4">${line}</p>`
                })
                .join(""),
            }}
          />
        </motion.article>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#21262d]"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7ee787] to-[#39d353] flex items-center justify-center text-[#0d1117] font-bold text-xl">
              TR
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#e6edf3] mb-1">Tomás Rodríguez</h3>
              <p className="text-[#8b949e]">
                Data Scientist & Machine Learning Engineer. Passionate about sharing knowledge
                about ML, statistics, and data science.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
