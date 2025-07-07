import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PPORRNActorCriticGuide() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Blog Post Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            Complete Guide to PPO, RNN, and Actor-Critic Methods
          </h1>
          
          <p className="text-gray-400 italic mb-8">
            Understanding the algorithms behind modern reinforcement learning
          </p>

          <hr className="border-gray-700 my-8" />

          {/* Table of Contents */}
          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><a href="#reinforcement-learning-foundations" className="text-blue-400 hover:text-blue-300">Reinforcement Learning Foundations</a></li>
              <li><a href="#actor-critic-methods" className="text-blue-400 hover:text-blue-300">Actor-Critic Methods</a></li>
              <li><a href="#recurrent-neural-networks-rnns" className="text-blue-400 hover:text-blue-300">Recurrent Neural Networks (RNNs)</a></li>
              <li><a href="#proximal-policy-optimization-ppo" className="text-blue-400 hover:text-blue-300">Proximal Policy Optimization (PPO)</a></li>
              <li><a href="#combining-all-three-ppo--rnn--actor-critic" className="text-blue-400 hover:text-blue-300">Combining All Three: PPO + RNN + Actor-Critic</a></li>
              <li><a href="#implementation-details" className="text-blue-400 hover:text-blue-300">Implementation Details</a></li>
              <li><a href="#practical-applications" className="text-blue-400 hover:text-blue-300">Practical Applications</a></li>
            </ol>
          </div>

          <h2 id="reinforcement-learning-foundations" className="text-2xl font-semibold mt-8 mb-4">
            Reinforcement Learning Foundations
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">The RL Problem</h3>
          
          <p>
            Reinforcement Learning is about training agents to make decisions in an environment to maximize cumulative reward.
          </p>

          <p><strong>Key Components:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Agent</strong>: The decision maker (your robot/AI)</li>
            <li><strong>Environment</strong>: The world the agent operates in</li>
            <li><strong>State (s)</strong>: Current situation description</li>
            <li><strong>Action (a)</strong>: What the agent can do</li>
            <li><strong>Reward (r)</strong>: Feedback signal</li>
            <li><strong>Policy (π)</strong>: Strategy for choosing actions</li>
          </ul>

          <p><strong>Goal</strong>: Find the optimal policy π* that maximizes expected cumulative reward.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Policy vs Value Methods</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Policy Methods</strong>: Directly learn what action to take</li>
            <li><strong>Value Methods</strong>: Learn how good states/actions are, then act greedily</li>
            <li><strong>Actor-Critic</strong>: Combines both approaches</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 id="actor-critic-methods" className="text-2xl font-semibold mt-8 mb-4">
            Actor-Critic Methods
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Core Concept</h3>
          
          <p>
            Actor-Critic uses two neural networks working together:
          </p>

          <p><strong>Actor (Policy Network)</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Role</strong>: Decides what action to take</li>
            <li><strong>Input</strong>: Current state</li>
            <li><strong>Output</strong>: Action probabilities or action values</li>
            <li><strong>Goal</strong>: Maximize expected reward</li>
          </ul>

          <p><strong>Critic (Value Network)</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Role</strong>: Evaluates how good the current state is</li>
            <li><strong>Input</strong>: Current state</li>
            <li><strong>Output</strong>: Value estimate V(s)</li>
            <li><strong>Goal</strong>: Accurately predict future rewards</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Why Actor-Critic Works</h3>

          <p><strong>Traditional Policy Gradient Problem:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`∇J(θ) = E[∇log π(a|s) × R]`}
          </pre>
          <p>The reward R has high variance, making learning slow and unstable.</p>

          <p><strong>Actor-Critic Solution:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`∇J(θ) = E[∇log π(a|s) × A(s,a)]`}
          </pre>
          <p>Where A(s,a) = Q(s,a) - V(s) is the <strong>advantage</strong>.</p>

          <p><strong>Advantage Function Benefits:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lower Variance</strong>: Subtracting baseline V(s) reduces noise</li>
            <li><strong>Better Signal</strong>: Tells us how much better/worse an action is than average</li>
            <li><strong>Faster Learning</strong>: More stable gradients</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Actor-Critic Algorithm</h3>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`# Pseudocode
for episode in episodes:
    state = env.reset()
    
    while not done:
        # Actor: Choose action
        action_probs = actor(state)
        action = sample(action_probs)
        
        # Environment step
        next_state, reward, done = env.step(action)
        
        # Critic: Evaluate states
        value = critic(state)
        next_value = critic(next_state)
        
        # Compute advantage
        advantage = reward + gamma * next_value - value
        
        # Update networks
        actor_loss = -log(action_probs[action]) * advantage
        critic_loss = advantage²
        
        optimize(actor_loss, critic_loss)
        state = next_state`}
          </pre>

          <hr className="border-gray-700 my-8" />

          <h2 id="recurrent-neural-networks-rnns" className="text-2xl font-semibold mt-8 mb-4">
            Recurrent Neural Networks (RNNs)
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Why RNNs in RL?</h3>

          <p><strong>The Problem</strong>: Many RL environments are <strong>partially observable</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agent doesn&apos;t see complete state</li>
            <li>Need to remember past information</li>
            <li>Must infer hidden state from observation history</li>
          </ul>

          <p><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Robot with limited sensors</li>
            <li>Game with fog of war</li>
            <li>Financial markets with delayed information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">RNN Architecture</h3>

          <p><strong>Basic RNN:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h)
y_t = W_hy * h_t + b_y`}
          </pre>

          <p><strong>GRU (Gated Recurrent Unit) - More Stable:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`z_t = σ(W_z * [h_{t-1}, x_t])     # Update gate
r_t = σ(W_r * [h_{t-1}, x_t])     # Reset gate
h̃_t = tanh(W * [r_t * h_{t-1}, x_t])  # Candidate state
h_t = (1 - z_t) * h_{t-1} + z_t * h̃_t  # Final state`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">RNN in Actor-Critic</h3>

          <p><strong>Modified Architecture:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`class ActorRNN:
    def __init__(self):
        self.gru = GRU(input_size, hidden_size)
        self.policy_head = Linear(hidden_size, num_actions)
    
    def forward(self, obs, hidden_state):
        # Process observation through RNN
        rnn_out, new_hidden = self.gru(obs, hidden_state)
        
        # Generate action probabilities
        action_probs = softmax(self.policy_head(rnn_out))
        
        return action_probs, new_hidden`}
          </pre>

          <p><strong>Key Benefits:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Memory</strong>: Maintains context across timesteps</li>
            <li><strong>Temporal Patterns</strong>: Can learn sequences and timing</li>
            <li><strong>Partial Observability</strong>: Handles incomplete information</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 id="proximal-policy-optimization-ppo" className="text-2xl font-semibold mt-8 mb-4">
            Proximal Policy Optimization (PPO)
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">The Problem PPO Solves</h3>

          <p><strong>Policy Gradient Challenge:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Small policy updates → slow learning</li>
            <li>Large policy updates → unstable, catastrophic failures</li>
            <li>Need &quot;just right&quot; update size</li>
          </ul>

          <p><strong>Previous Solutions:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>TRPO</strong>: Complex, computationally expensive</li>
            <li><strong>A3C</strong>: Requires many parallel workers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">PPO Core Innovation</h3>

          <p><strong>Clipped Surrogate Objective:</strong></p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`r_t(θ) = π_θ(a_t|s_t) / π_θ_old(a_t|s_t)  # Probability ratio

L^CLIP(θ) = E_t[min(r_t(θ)A_t, clip(r_t(θ), 1-ε, 1+ε)A_t)]`}
          </pre>

          <p><strong>What This Means:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>r_t(θ)</strong>: How much the policy changed</li>
            <li><strong>clip(r_t, 1-ε, 1+ε)</strong>: Limit changes to [1-ε, 1+ε] range</li>
            <li><strong>Typical ε</strong>: 0.2 (allows 20% policy change)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">PPO Algorithm</h3>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`# PPO Pseudocode
for iteration in training_iterations:
    # 1. Collect trajectories with current policy
    trajectories = []
    for env in parallel_envs:
        trajectory = collect_trajectory(env, policy, steps=2048)
        trajectories.append(trajectory)
    
    # 2. Compute advantages
    for traj in trajectories:
        values = critic(traj.states)
        advantages = compute_gae(traj.rewards, values, gamma=0.99)
        traj.advantages = advantages
    
    # 3. Update policy for multiple epochs
    for epoch in range(4):  # Typically 4 epochs
        for batch in mini_batches(trajectories):
            # Compute probability ratios
            old_probs = batch.action_probs
            new_probs = policy(batch.states)
            ratios = new_probs / old_probs
            
            # Clipped surrogate loss
            surr1 = ratios * batch.advantages
            surr2 = clip(ratios, 1-0.2, 1+0.2) * batch.advantages
            policy_loss = -min(surr1, surr2).mean()
            
            # Value loss
            value_loss = (critic(batch.states) - batch.returns)².mean()
            
            # Total loss
            total_loss = policy_loss + 0.5 * value_loss
            
            # Update networks
            optimizer.step(total_loss)`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">PPO Advantages</h3>

          <p><strong>Simplicity:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Easy to implement</li>
            <li>Few hyperparameters</li>
            <li>Stable across different environments</li>
          </ul>

          <p><strong>Efficiency:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reuses collected data multiple times</li>
            <li>No need for many parallel workers</li>
            <li>Good sample efficiency</li>
          </ul>

          <p><strong>Stability:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevents catastrophic policy updates</li>
            <li>Reliable convergence</li>
            <li>Works well out-of-the-box</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 id="combining-all-three-ppo--rnn--actor-critic" className="text-2xl font-semibold mt-8 mb-4">
            Combining All Three: PPO + RNN + Actor-Critic
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Architecture Overview</h3>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`class PPOActorCriticRNN:
    def __init__(self):
        # Shared RNN backbone
        self.rnn = GRU(obs_size, hidden_size)
        
        # Actor head
        self.actor_head = Linear(hidden_size, num_actions)
        
        # Critic head
        self.critic_head = Linear(hidden_size, 1)
    
    def forward(self, obs, hidden_state):
        # Process through RNN
        rnn_out, new_hidden = self.rnn(obs, hidden_state)
        
        # Generate outputs
        action_logits = self.actor_head(rnn_out)
        value = self.critic_head(rnn_out)
        
        return action_logits, value, new_hidden`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Training Loop</h3>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`def train_ppo_rnn_actor_critic():
    model = PPOActorCriticRNN()
    
    for iteration in range(num_iterations):
        # 1. Collect trajectories
        trajectories = []
        hidden_states = initialize_hidden_states()
        
        for step in range(rollout_length):
            # Forward pass
            action_logits, values, hidden_states = model(
                observations, hidden_states
            )
            
            # Sample actions
            actions = sample_actions(action_logits)
            
            # Environment step
            next_obs, rewards, dones = env.step(actions)
            
            # Store transition
            trajectories.append({
                'obs': observations,
                'actions': actions,
                'rewards': rewards,
                'values': values,
                'action_logits': action_logits,
                'hidden_states': hidden_states,
                'dones': dones
            })
            
            # Reset hidden states on episode end
            hidden_states = reset_hidden_on_done(hidden_states, dones)
            observations = next_obs
        
        # 2. Compute advantages using GAE
        advantages = compute_gae(trajectories)
        
        # 3. PPO updates
        for epoch in range(ppo_epochs):
            for batch in create_mini_batches(trajectories):
                # Recreate forward pass
                action_logits, values, _ = model(
                    batch.obs, batch.hidden_states
                )
                
                # PPO loss computation
                policy_loss = compute_ppo_loss(
                    action_logits, batch.actions, 
                    batch.old_action_logits, batch.advantages
                )
                
                value_loss = compute_value_loss(values, batch.returns)
                
                total_loss = policy_loss + 0.5 * value_loss
                
                # Update
                optimizer.zero_grad()
                total_loss.backward()
                optimizer.step()`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Key Implementation Details</h3>

          <p><strong>Hidden State Management:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reset hidden states on episode boundaries</li>
            <li>Carry hidden states across timesteps within episodes</li>
            <li>Handle variable-length episodes properly</li>
          </ul>

          <p><strong>Advantage Computation:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use GAE (Generalized Advantage Estimation)</li>
            <li>Account for episode boundaries in GAE computation</li>
            <li>Normalize advantages for stability</li>
          </ul>

          <p><strong>Mini-batch Creation:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Preserve temporal structure within episodes</li>
            <li>Handle variable-length sequences</li>
            <li>Efficient padding/masking</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 id="implementation-details" className="text-2xl font-semibold mt-8 mb-4">
            Implementation Details
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Generalized Advantage Estimation (GAE)</h3>

          <p><strong>Problem</strong>: Simple advantage A = r + γV(s&apos;) - V(s) has high variance</p>

          <p><strong>Solution</strong>: GAE blends n-step returns:</p>
          <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
{`GAE(λ) = (1-λ)[A₁ + λA₂ + λ²A₃ + ...]

where:
A₁ = r + γV(s') - V(s)
A₂ = r + γr' + γ²V(s'') - V(s)
A₃ = r + γr' + γ²r'' + γ³V(s''') - V(s)`}
          </pre>

          <p><strong>λ Parameter:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>λ = 0: Low variance, high bias (just 1-step)</li>
            <li>λ = 1: High variance, low bias (Monte Carlo)</li>
            <li>λ = 0.95: Good balance (commonly used)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Hyperparameter Guidelines</h3>

          <p><strong>PPO Hyperparameters:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clip ratio (ε): 0.2</li>
            <li>PPO epochs: 4</li>
            <li>Mini-batch size: 64-256</li>
            <li>Learning rate: 3e-4</li>
            <li>GAE λ: 0.95</li>
            <li>Discount γ: 0.99</li>
          </ul>

          <p><strong>RNN Hyperparameters:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hidden size: 128-512</li>
            <li>Sequence length: 128-512</li>
            <li>Gradient clipping: 0.5-1.0</li>
          </ul>

          <p><strong>Training Setup:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Parallel environments: 8-2048</li>
            <li>Rollout length: 2048 steps</li>
            <li>Total timesteps: 10M-100M</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 id="practical-applications" className="text-2xl font-semibold mt-8 mb-4">
            Practical Applications
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Robotics (Like Your Humanoid)</h3>
          <p><strong>Why PPO + RNN + Actor-Critic:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Partial Observability</strong>: Robot sensors don&apos;t see everything</li>
            <li><strong>Temporal Patterns</strong>: Walking requires coordinated sequences</li>
            <li><strong>Stability</strong>: PPO prevents dangerous policy updates</li>
            <li><strong>Continuous Control</strong>: Actor-Critic handles continuous actions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Game AI</h3>
          <p><strong>Applications:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time strategy games (partial information)</li>
            <li>Fighting games (combo sequences)</li>
            <li>Racing games (temporal control)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Financial Trading</h3>
          <p><strong>Use Cases:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Market making (memory of recent trades)</li>
            <li>Portfolio management (long-term dependencies)</li>
            <li>Risk management (stable policy updates)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Natural Language Processing</h3>
          <p><strong>Applications:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dialogue systems (conversation context)</li>
            <li>Text generation (sequential dependencies)</li>
            <li>Machine translation (sequence-to-sequence)</li>
          </ul>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">Summary</h2>

          <p><strong>Actor-Critic</strong>: Combines policy learning (actor) with value estimation (critic) for lower variance and more stable learning.</p>

          <p><strong>RNN</strong>: Adds memory to handle partial observability and temporal patterns crucial for real-world applications.</p>

          <p><strong>PPO</strong>: Ensures stable policy updates through clipping, making the training process reliable and efficient.</p>

          <p><strong>Together</strong>: They create a powerful, stable, and practical algorithm for complex sequential decision-making problems like humanoid locomotion.</p>

          <p>
            The beauty of this combination is that each component solves a fundamental challenge in RL:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Actor-Critic</strong> → variance reduction</li>
            <li><strong>RNN</strong> → temporal dependencies</li>
            <li><strong>PPO</strong> → stable updates</li>
          </ul>

          <p>
            This is why it&apos;s become the go-to method for many modern RL applications, including the humanoid walking code you analyzed!
          </p>
        </article>
      </div>
    </div>
  )
} 