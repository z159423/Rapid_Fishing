using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChallengeManager : MonoBehaviour
{

    //특정 물고기 몇마리 잡기
    //아무 물고기 몇마리 잡기
    //

    public void NewChallenge()
    {

    }

    public void ChallengeClear()
    {

    }

    public abstract class Challenge
    {
        public challengeType ChallengeType;

        public int targetNumber;

        
    }

    public class CatchTarget
    {
        public int targetNumber;
        public int catchAmount;

    }

    public class CatchAnyTarget
    {
        public int catchAmount;
    }
}

public enum challengeType { catchTarget, catchAnyTarget }
